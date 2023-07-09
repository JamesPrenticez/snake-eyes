/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // istanbul or 'c8'
    },
    setupFiles: ["src/setupTest.ts"],
  },
  assetsInclude: ['**/*.md'],
  plugins: [react()]
});
