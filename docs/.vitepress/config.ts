import { demoblockPlugin } from "vitepress-theme-demoblock";

export default {
  base: "/smart-ui/",
  themeConfig: {
    // siteTitle: "SmartUI",
    siteTitle: false,
    // logo: "/logo.png",
    logo: "https://element-plus.org/images/element-plus-logo.svg",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      logo: "/logo.png",
      alt: "33",
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
};
