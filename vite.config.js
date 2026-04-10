import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // Lets `import Foo from './foo.svg?react'` give you a React component.
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  // Treat asset files with uppercase extensions and 3D model files as
  // static assets — the existing image set has a mix of `.jpg` and `.JPG`
  // / `.PNG`, and `.gltf` / `.obj` / `.mtl` aren't recognised by default.
  assetsInclude: [
    "**/*.JPG",
    "**/*.PNG",
    "**/*.JPEG",
    "**/*.GIF",
    "**/*.gltf",
    "**/*.glb",
    "**/*.obj",
    "**/*.mtl",
  ],
  build: {
    outDir: "build",
    sourcemap: true,
    minify: "esbuild",
    target: "es2018",
    rollupOptions: {
      output: {
        // Split large vendor libs into their own chunks so the initial JS
        // download is smaller and long-term caching is more effective.
        manualChunks: {
          three: ["three"],
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  esbuild: {
    // Only drop console.* / debugger in production builds. During `vite dev`
    // we want those logs around for debugging — silencing them in dev
    // previously masked a gltf-loading race condition on the landing page.
    drop: command === "build" ? ["console", "debugger"] : [],
  },
  // The legacy Sass JS API is louder than useful here — the project still
  // relies on `@import` and slash-division, which are deprecated but not yet
  // broken. Switch to the modern compiler and silence the noise.
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["legacy-js-api", "import", "slash-div"],
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.js"],
    css: false,
  },
}));
