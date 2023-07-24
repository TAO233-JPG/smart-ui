import { defineConfig } from "vite";

import Unocss from "./config/unocss";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    Unocss(),
    vue(),
    vueJsx(),
  ],
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
});
