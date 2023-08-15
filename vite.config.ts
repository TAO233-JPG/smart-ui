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
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
    exports: "named",
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), vue(), vueJsx()],
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true,
    brotliSize: true, // 生成压缩大小报告
    // cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartUI",
      fileName: "smart-ui",
      formats: ["es", "iife", "umd"],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },
} as VitestConfigExport);
