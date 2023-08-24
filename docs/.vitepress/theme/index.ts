import DefaultTheme from "vitepress/theme";

// 主题样式
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import "./style.css";
import { useComponents } from "./useComponents";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app.component("Demo", Demo);
    // app.component("DemoBlock", DemoBlock);
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    useComponents(app);
    app.mixin({
      async mounted() {
        import("../../../src/entry").then((SmartUI) => {
          app.use(SmartUI);
        });
      },
    });
  },
};
