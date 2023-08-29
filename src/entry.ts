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

import STabs from "./tabs";
import STabsItem from "./tabs-item";

import SSwitch from "./switch";

import SInput from "./input";

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
  STabs,
  STabsItem,
  SSwitch,
  SInput,
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

    app.component(STabs.name, STabs);
    app.component(STabsItem.name, STabsItem);

    app.component(SSwitch.name, SSwitch);
    app.component(SInput.name, SInput);

    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
  },
};
