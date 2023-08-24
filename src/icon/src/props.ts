import { computed, type ExtractPropTypes } from "vue";

export const Props = {
  /** icon 内容 */
  icon: { type: String },
  /** icon 颜色 */
  color: { type: String },
  /** icon 大小 */
  size: { type: String, default: "26" },
  dot: {
    type: Boolean,
  },
  badge: {
    type: String,
  },
  // size: setStringNumberProp(),
  /** 点击之后触发的回调 */
  // onClick: setFunctionProp<HandleMouse>(),
} as const;

/** svg-icon 组件 props 类型 */
export type IconProps = ExtractPropTypes<typeof Props>;

export const useIcon = (props: IconProps) => {
  const styles = computed(() => {
    return { color: props.color, "font-size": props.size + "px" };
  });

  return { styles };
};
