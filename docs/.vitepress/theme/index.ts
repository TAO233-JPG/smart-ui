import DefaultTheme from "vitepress/theme";
// 主题样式
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import "./style.css";
import { useComponents } from "./useComponents";
import { EnhanceAppContext } from "vitepress";

import "../../../theme/index.scss";

export default {
  ...DefaultTheme,
  enhanceApp: async (ctx: EnhanceAppContext) => {
    // app.component("Demo", Demo);
    // app.component("DemoBlock", DemoBlock);
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    const { app, router, siteData } = ctx;
    useComponents(app);

    if (!import.meta.env.SSR) {
      const SmartUI = await import("../../../src/entry");
      app.use(SmartUI.default);
    }
  },
};
