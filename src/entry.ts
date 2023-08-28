import { App } from "vue";

import "../theme/index.scss";

import SButton from "./button";
import SIcon from "./icon";
import SFCButton from "./SFCButton.vue";
import JsxButton from "./jsxButton";

import SContainer from "./container";
import SHeader from "./header";
import SMain from "./main";
import SAsdie from "./aside";
import SFooter from "./footer";

import SModal from "./modal";

// 单独导出组件
export {
  SButton,
  SFCButton,
  JsxButton,
  SIcon,
  SContainer,
  SHeader,
  SMain,
  SAsdie,
  SFooter,
  SModal,
};

// 插件，导出所有组件
export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(SIcon.name, SIcon);
    app.component(SContainer.name, SContainer);
    app.component(SHeader.name, SHeader);
    app.component(SMain.name, SMain);
    app.component(SAsdie.name, SAsdie);
    app.component(SFooter.name, SFooter);

    app.component(SModal.name, SModal);

    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
  },
};
