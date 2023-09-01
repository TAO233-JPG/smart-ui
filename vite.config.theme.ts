import { resolve } from "path";
import type { UserConfigExport } from "vite";

export default (): UserConfigExport => {
  return {
    build: {
      outDir: resolve(__dirname, "./dist"),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, "./theme/index.scss"),
        output: {
          /**
           * 取消文件名 hash 值
           *
           * @see output.assetFileNames https://rollupjs.org/guide/en/#outputassetfilenames
           */
          assetFileNames: "[name].[ext]",
        },
      },
    },
  };
};
