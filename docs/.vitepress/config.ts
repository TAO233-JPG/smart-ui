import { defineConfig } from "vitepress";
import { demoblockPlugin } from "vitepress-theme-demoblock";

export default defineConfig({
  base: "/smart-ui/",
  lang: "zh-CN",
  title: "Vue3 UI 框架",
  titleTemplate: "Smart-UI",

  head: [['link', { rel: 'icon', href: '/logo.ico' }]],

  themeConfig: {
    siteTitle: "Smart-UI",
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/TAO233-JPG/smart-ui" }],
    sidebar: {
      "/components/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/components/installation/",
            },
            {
              text: "快速开始",
              link: "/components/quickstart/",
            },
          ],
        },
        {
          text: "基础组件",
          items: [
            {
              text: "按钮",
              link: "/components/button/",
            },
          ],
        },
        {
          text: "进阶",
          link: "/xx",
        },
      ],
    },
  },

  markdown: {
    theme: { light: "github-light", dark: "github-dark" },
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoblockPlugin, {
        customClass: "demoblock-custom",
      });
    },
  },
});
