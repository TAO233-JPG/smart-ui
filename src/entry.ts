import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JsxButton from "./jsxButton";

// 单独导出组件
export { MyButton, SFCButton, JsxButton };

// 插件，导出所有组件
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
  },
};
