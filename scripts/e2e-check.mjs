#!/usr/bin/env node
/**
 * Agentic browser check for the dev server.
 *
 * Spawns headless Chrome via the Chrome DevTools Protocol (no puppeteer /
 * playwright — just `ws` + a raw WebSocket session), navigates to the dev
 * server, and reports:
 *   - console.log / console.error / console.warn output
 *   - uncaught exceptions
 *   - failed network requests
 *   - a DOM snapshot of `#root`
 *   - a full-page PNG screenshot (optional)
 *
 * Usage:
 *   npm run e2e                          # default http://localhost:3000/
 *   npm run e2e -- http://localhost:3000/#/about
 *   npm run e2e -- --screenshot=/tmp/shot.png
 *   npm run e2e -- --wait=8000           # ms to wait after navigation
 *
 * Prereqs:
 *   - Google Chrome installed. Override with CHROME_PATH env var if needed.
 *   - The dev server is already running (`npm run dev`).
 *
 * Exit code is non-zero if any uncaught exception or failed network request
 * is detected during the capture window.
 */

import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { WebSocket } from "ws";

const DEFAULT_CHROME_MAC =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const CHROME = process.env.CHROME_PATH || DEFAULT_CHROME_MAC;

// ---- arg parsing ---------------------------------------------------------
const args = process.argv.slice(2);
let target = "http://localhost:3000/";
let screenshotPath = null;
let waitMs = 5000;
let clickEnter = false;
let postClickWaitMs = 6000;
for (const a of args) {
  if (a.startsWith("--screenshot=")) screenshotPath = a.slice("--screenshot=".length);
  else if (a.startsWith("--wait=")) waitMs = Number(a.slice("--wait=".length));
  else if (a === "--click-enter") clickEnter = true;
  else if (a.startsWith("--post-click-wait=")) postClickWaitMs = Number(a.slice("--post-click-wait=".length));
  else if (!a.startsWith("--")) target = a;
}

// ---- launch chrome --------------------------------------------------------
const port = 9200 + Math.floor(Math.random() * 500);
const profileDir = `/tmp/e2e-chrome-${Date.now()}`;
const chrome = spawn(CHROME, [
  `--remote-debugging-port=${port}`,
  "--headless=new",
  // Keep GPU enabled — the landing page needs WebGL to render the cube.
  // Chrome Headless uses SwiftShader for WebGL when no real GPU is present.
  "--use-gl=angle",
  "--use-angle=swiftshader",
  "--enable-unsafe-swiftshader",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  `--user-data-dir=${profileDir}`,
  "--window-size=1440,900",
  "about:blank",
]);
chrome.stderr.on("data", () => {}); // suppress chrome spew

// Give Chrome a beat to open its debugging port.
await new Promise((r) => setTimeout(r, 1500));

let meta;
try {
  meta = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
} catch (err) {
  console.error(
    `Couldn't reach Chrome DevTools at port ${port}. Is CHROME_PATH correct?`
  );
  chrome.kill();
  process.exit(2);
}

const ws = new WebSocket(meta.webSocketDebuggerUrl);
await new Promise((r) => ws.once("open", r));

// ---- tiny CDP client ------------------------------------------------------
let msgId = 0;
const pending = new Map();
function rpc(method, params = {}, sessionId) {
  const id = ++msgId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify(sessionId ? { sessionId, id, method, params } : { id, method, params }));
  });
}

const errors = [];
const networkFailures = [];
const consoleLines = [];

ws.on("message", (raw) => {
  const m = JSON.parse(raw.toString());
  if (m.id && pending.has(m.id)) {
    const { resolve, reject } = pending.get(m.id);
    pending.delete(m.id);
    if (m.error) reject(new Error(m.error.message));
    else resolve(m.result);
    return;
  }
  switch (m.method) {
    case "Runtime.consoleAPICalled": {
      const args = (m.params.args || [])
        .map((a) => a.value ?? a.description ?? JSON.stringify(a))
        .join(" ");
      consoleLines.push({ type: m.params.type, text: args });
      const label = `[console.${m.params.type}]`;
      // Skip the noisy React-warning stack dumps in the terminal — the
      // component-stack is captured in consoleLines for the summary.
      const firstLine = args.split("\n")[0].slice(0, 200);
      console.log(`${label} ${firstLine}`);
      break;
    }
    case "Runtime.exceptionThrown": {
      const e = m.params.exceptionDetails;
      const msg = `${e.text} ${e.exception?.description ?? ""}`.trim();
      errors.push({
        text: msg,
        url: e.url,
        line: e.lineNumber,
        col: e.columnNumber,
      });
      console.log(
        `[exception] ${msg} @ ${e.url}:${e.lineNumber}:${e.columnNumber}`
      );
      break;
    }
    case "Network.loadingFailed": {
      networkFailures.push({
        requestId: m.params.requestId,
        errorText: m.params.errorText,
        type: m.params.type,
      });
      console.log(
        `[network-fail] ${m.params.errorText} (${m.params.type})`
      );
      break;
    }
    default:
      break;
  }
});

// ---- attach to the page target --------------------------------------------
const { targetInfos } = await rpc("Target.getTargets");
const pageTarget = targetInfos.find((t) => t.type === "page");
const { sessionId } = await rpc("Target.attachToTarget", {
  targetId: pageTarget.targetId,
  flatten: true,
});

await rpc("Runtime.enable", {}, sessionId);
await rpc("Network.enable", {}, sessionId);
await rpc("Page.enable", {}, sessionId);
await rpc("Log.enable", {}, sessionId);

console.log(`→ Navigating to ${target}`);
await rpc("Page.navigate", { url: target }, sessionId);

// Let the app boot and any intro animations kick in.
await new Promise((r) => setTimeout(r, waitMs));

// Optionally click the ENTER prompt and wait for the cube intro animation.
if (clickEnter) {
  console.log("→ Clicking #enter-site");
  const clickResult = await rpc(
    "Runtime.evaluate",
    {
      expression: `(() => {
        const btn = document.querySelector('#enter-site');
        if (!btn) return { clicked: false, reason: 'no #enter-site' };
        btn.click();
        return { clicked: true };
      })()`,
      returnByValue: true,
    },
    sessionId
  );
  console.log("→ click result:", JSON.stringify(clickResult.result.value));
  await new Promise((r) => setTimeout(r, postClickWaitMs));
}

// ---- DOM snapshot ---------------------------------------------------------
const snap = await rpc(
  "Runtime.evaluate",
  {
    expression: `(() => {
      const root = document.getElementById('root');
      if (!root) return { empty: true, reason: 'no #root' };
      const bg = getComputedStyle(document.body).backgroundColor;
      const allEls = root.querySelectorAll('*').length;
      const canvas = root.querySelector('canvas');
      const prompt = root.querySelector('#landing-page-prompt');
      const promptVisible = prompt && getComputedStyle(prompt).opacity !== '0';
      const landingPage = root.querySelector('#landing-page');
      const landingPageClasses = landingPage ? landingPage.className : null;
      const bg2 = root.querySelector('.landing-page-background');
      const bgClasses = bg2 ? bg2.className : null;
      const bgOpacity = bg2 ? getComputedStyle(bg2).opacity : null;
      const navbar = root.querySelector('.navbar');
      const navbarVisible = navbar && getComputedStyle(navbar).opacity !== '0';
      return {
        innerHTMLLength: root.innerHTML.length,
        childCount: root.childElementCount,
        descendantCount: allEls,
        bodyBg: bg,
        hasCanvas: !!canvas,
        canvasSize: canvas ? { w: canvas.width, h: canvas.height } : null,
        promptExists: !!prompt,
        promptVisible: !!promptVisible,
        firstChildTag: root.firstElementChild?.tagName ?? null,
        landingPageClasses,
        bgClasses,
        bgOpacity,
        navbarClasses: navbar ? navbar.className : null,
        navbarVisible: !!navbarVisible,
      };
    })()`,
    returnByValue: true,
  },
  sessionId
);

console.log("\n=== DOM snapshot ===");
console.log(JSON.stringify(snap.result.value, null, 2));

// ---- optional screenshot --------------------------------------------------
if (screenshotPath) {
  const shot = await rpc(
    "Page.captureScreenshot",
    { format: "png", captureBeyondViewport: false },
    sessionId
  );
  writeFileSync(screenshotPath, Buffer.from(shot.data, "base64"));
  console.log(`→ Screenshot written to ${screenshotPath}`);
}

// ---- summary --------------------------------------------------------------
console.log("\n=== Summary ===");
console.log(`console messages: ${consoleLines.length}`);
console.log(`errors:           ${errors.length}`);
console.log(`network failures: ${networkFailures.length}`);

const errored = errors.length > 0 || networkFailures.length > 0;
chrome.kill();
process.exit(errored ? 1 : 0);
