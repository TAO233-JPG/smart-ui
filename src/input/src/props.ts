import type { ExtractPropTypes, PropType } from "vue";
import type {
  SInputType,
  SInputSize,
  SHandleEvent,
  SInputEnter,
} from "./interface";
import { SInputUpdate } from "./interface";

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number],
  },

  type: {
    type: String as PropType<SInputType>,
    default: "text",
  },

  size: {
    type: String as PropType<SInputSize>,
    default: "middle",
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  placeholder: {
    type: String,
    default: "",
  },
  clear: {
    type: Boolean,
    default: false,
  },
  /** 自定义宽度 */
  width: {
    type: [String, Number],
  },

  readonly: {
    type: Boolean,
    default: false,
  },
  search: { type: Boolean, default: false },
  searchText: { type: String, default: "搜索" },
  /** 是否按下回车进行搜索 */
  enterSearch: { type: Boolean, default: false },

  /** 点击搜索之后触发的回调 */
  onSearch: Function as PropType<SInputUpdate>,
  /** 绑定值发生改变时触发的回调 */
  onChange: Function as PropType<SInputUpdate>,
  /** input 事件触发的回调 */
  onInput: Function as PropType<SInputUpdate>,
  /** 失去焦点时触发的回调 */
  onBlur: Function as PropType<SHandleEvent>,
  // /** 获得焦点时触发的回调 */
  onFocus: Function as PropType<SHandleEvent>,
  // /** 按下回车触发的 */
  onEnter: Function as PropType<SInputEnter>,
};

/** input 组件 props 类型 */
export type SInputProps = ExtractPropTypes<typeof Props>;
