import { ExtractPropTypes, InjectionKey, PropType } from "vue";
import { TabsPosition, TabsProvide, TabsType } from "./interface";

export const Props = {
  modelValue: {
    type: [String, Number],
  },
  type: {
    type: String as PropType<TabsType>,
    default: "line",
  },
  position: {
    type: String as PropType<TabsPosition>,
    default: "top",
  },
};

/** tabs 组件 props 类型 */
export type STabsProps = ExtractPropTypes<typeof Props>;

/** tabs 组件注入的依赖项 */
export const TABS_PROPS_KEY: InjectionKey<TabsProvide> =
  Symbol("tabs-props-key");
