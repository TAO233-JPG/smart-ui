import { defineConfig } from "vite";

import Unocss from "./config/unocss";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), vue(), vueJsx()],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartUI",
      fileName: "smarty-ui",
      formats: ["es", "iife", "umd"],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
} as VitestConfigExport);
