import { ExtractPropTypes, PropType, computed } from "vue";
import { ButtonNativeType } from "./interface";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "danger"
  | "warning";

export type ButtonSizeType = "middle" | "small" | "large";

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => "default",
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: (): ButtonSizeType => "middle",
  },
  plain: {
    type: Boolean,
    default: (): Boolean => false,
  },
  round: {
    type: Boolean,
    default: (): Boolean => false,
  },
  circle: {
    type: Boolean,
    default: (): Boolean => false,
  },
  disabled: {
    type: Boolean,
    default: (): Boolean => false,
  },
  icon: {
    type: String,
    default: (): String => "",
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => "button",
  },
  name: {
    type: String,
    default: "s-button",
  },
};

// export const Emits = {
//   click: (evt: MouseEvent): MouseEvent => evt,
// };

export type ButtonProps = ExtractPropTypes<typeof Props>;

export const useButton = (props: ButtonProps) => {
  const classList = computed(() => {
    return [
      "s-button",
      `s-button__${props.type}`,
      `s-button__${props.size}`,
      {
        "s-button__round": props.round,
        "s-button__plain": props.plain,
        "s-button__circle": props.circle,
        "s-button__disabled": props.disabled,
      },
    ];
  });

  return classList;
};
