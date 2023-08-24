import { App } from "vue";

import "../theme/index.scss";

import SButton from "./button";
import SIcon from "./icon";
import SFCButton from "./SFCButton.vue";
import JsxButton from "./jsxButton";

// 单独导出组件
export { SButton, SFCButton, JsxButton, SIcon };

// 插件，导出所有组件
export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(SIcon.name, SIcon);
    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
  },
};
