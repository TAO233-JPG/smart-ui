import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

const rollupOptions = {
  external: ["vue"],
  output: [
    {
      //打包格式
      format: "es",
      //打包后文件名
      entryFileNames: "[name].js",
      //让打包目录和我们目录对应
      preserveModules: true,
      exports: "named",
      //配置打包根目录
      dir: "./dist/es",
    },
    {
      //打包格式
      format: "cjs",
      //打包后文件名
      entryFileNames: "[name].js",
      //让打包目录和我们目录对应
      preserveModules: true,
      exports: "named",
      //配置打包根目录
      dir: "./dist/cjs",
    },
  ],
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    vueJsx(),
    dts({
      entryRoot: "./src",
      outDir: ["./dist/es/src", "./dist/cjs/src"],
      // insertTypesEntry: false,
      // copyDtsFiles: true,
      // rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
      // exclude: ["**/__test__/**", "node_module/**"],
    }),
  ],
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true,
    brotliSize: true, // 生成压缩大小报告
    // cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name:'Smart-UI'
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
