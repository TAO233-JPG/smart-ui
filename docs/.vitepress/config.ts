import { defineConfig } from "vitepress";
import { demoblockPlugin } from "vitepress-theme-demoblock";

export default defineConfig({
  base: "/smart-ui/",
  lang: "zh-CN",
  title: "Vue3 UI 框架",
  titleTemplate: "Smart-UI",

  head: [["link", { rel: "icon", href: "/logo.ico" }]],

  themeConfig: {
    siteTitle: "Smart-UI",
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guide/quickstart/" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/TAO233-JPG/smart-ui" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "快速开始",
          link: "/guide/quickstart/"
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "按钮",
              link: "/components/button/",
            },
            {
              text: "图标",
              link: "/components/icon/",
            },
            {
              text: "布局",
              link: "/components/container/",
            },
            {
              text: "对话框",
              link: "/components/modal/",
            },
            {
              text: "Tabs 选项卡",
              link: "/components/tabs/",
            },
            {
              text: "Switch 开关",
              link: "/components/switch/",
            },
            {
              text: "input 输入框",
              link: "/components/input/",
            },
            {
              text: "select 选择器",
              link: "/components/select/",
            },
            {
              text: "trigger 触发器",
              link: "/components/trigger/",
            },
            {
              text: "tooltip 文字提示",
              link: "/components/tooltip/",
            },
          ],
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
  vue: {
    script: {
      defineModel: true,
    },
  },
});
