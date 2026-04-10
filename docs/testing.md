# Testing

There are three kinds of test feedback available in this repo, from fastest
to slowest. **Use them top-down**: run unit tests first, then boot the dev
server and run the e2e harness when you need to see what the page actually
does.

## 1. Unit tests (Vitest)

```sh
npm test          # one-shot run
npm run test-watch
```

Vitest + jsdom + `@testing-library/jest-dom`. Tests live in `src/test/`.
They're good for:

- pure helpers in `src/util.jsx` (formatters, `is_modified_click`)
- sanity checks on the state-enum maps in `src/constants.js`
- regression guards for framework footguns (see `react18-batching.test.js`)

They do **not** cover rendering the landing page — jsdom has no WebGL, and
the three.js setup in `LandingPage.componentDidMount` needs a real GL
context. Use the e2e harness for that.

## 2. Linting / formatting

```sh
npm run lint
npm run format-check    # prettier --check
npm run format          # prettier --write
```

## 3. E2E smoke check (headless Chrome via CDP)

`scripts/e2e-check.mjs` drives a headless Chrome instance through the
Chrome DevTools Protocol — no puppeteer, no playwright, just `ws` and a
raw WebSocket session. It:

- navigates to a URL (default `http://localhost:3000/`)
- captures every `console.*` call, uncaught exception, and failed network
  request
- snapshots the `#root` DOM (class lists, canvas size, `landing-page`
  state, prompt visibility)
- optionally clicks `#enter-site` and waits for the intro animation
- optionally saves a full-page PNG screenshot

It exits non-zero if any uncaught error or failed request happened during
the capture window, so it works in CI too.

### Prereqs

- Google Chrome installed at the standard macOS path, or set
  `CHROME_PATH=/path/to/chromium` in the environment.
- Dev server already running in another terminal (`npm run dev`).

### Basic usage

```sh
# Terminal 1
npm run dev

# Terminal 2
npm run e2e

# Navigate to a specific route
npm run e2e -- http://localhost:3000/#/about

# Click the landing page's ENTER prompt and let the intro animation play
npm run e2e -- --click-enter --post-click-wait=10000

# Save a full-page screenshot
npm run e2e -- --click-enter --screenshot=/tmp/after-enter.png

# Give the page longer to boot before the snapshot (ms)
npm run e2e -- --wait=8000
```

### What good output looks like

```
→ Navigating to http://localhost:3000/
[console.log] [DEBUG] pageshow event hit
[console.log] 100% loaded        ← gltf finished downloading
→ Clicking #enter-site
[console.log] [DEBUG] Old State desktop-landing-page-cube-intro, New State default
                                 ← the cube intro animation finished and the
                                   page transitioned into `default`

=== DOM snapshot ===
{
  "landingPageClasses": "default",
  "bgClasses": "landing-page-background default visible",
  "bgOpacity": "1",           ← canvas is visible, cube is rendering
  "navbarVisible": true
}

=== Summary ===
errors:           0
network failures: 0
```

### What bad output looks like

- `bgOpacity: "0"` after clicking enter → something in the gltf load
  callback crashed; `assetHasLoaded` was never set. Check the
  `[console.log] An error happened …` line.
- `landingPageClasses` stays at `desktop-landing-page-cube-intro` → the
  cube animation never finished, probably because the three.js mixer
  `finished` event never fired.
- `promptExists: false` after a fresh load → the landing page's intro
  animation never kicked off. Usually a `pageshow` / `load` race.

### When to run this

Run this every time you change anything that lives in `src/pages/LandingPage.jsx`,
`src/pages/LinePage.jsx`, `src/lib/` (three.js helpers), or the React
render tree at the app root. Unit tests can't catch issues in any of those
paths because jsdom has no WebGL.

### How it works (for the curious)

1. Launches Chrome with `--remote-debugging-port=<random>` and
   `--headless=new`.
2. Opens a WebSocket to Chrome's DevTools Protocol endpoint.
3. Subscribes to `Runtime.consoleAPICalled`, `Runtime.exceptionThrown`,
   and `Network.loadingFailed` events.
4. Sends `Page.navigate`, waits, evaluates a DOM-inspection expression,
   optionally takes a screenshot via `Page.captureScreenshot`.
5. Kills the Chrome process and exits.

The script is ~170 lines of plain ESM — no transitive dependency tree.
If you need more CDP methods, add them to the `rpc(...)` calls directly;
the full protocol reference is at
<https://chromedevtools.github.io/devtools-protocol/>.
