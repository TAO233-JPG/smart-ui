import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type IType = "primary" | "success" | "info" | "warning" | "danger";

const typeToColorMap = new Map<IType, IColor>([
  ["primary", "blue"],
  ["success", "green"],
  ["info", "gray"],
  ["warning", "yellow"],
  ["danger", "red"],
]);

const sizeMap = {
  small: {
    x: 2,
    y: 1,
    text: "sm",
  },
  medium: {
    x: 3,
    y: 1.5,
    text: "base",
  },
  large: {
    x: 4,
    y: 2,
    text: "lg",
  },
};

export const props = {
  // color: {
  //   type: String as PropType<IColor>,
  //   default: "blue", // 设定默认颜色
  // },
  plain: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  type: {
    type: String as PropType<IType>,
    default: "primary", // 设定默认颜色
  },
  size: {
    type: String as PropType<"small" | "large" | "medium">,
    default: "large",
  },
  icon: {
    type: String,
    default: "",
  },
};

export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          py-${sizeMap[props.size].y} 
          px-${sizeMap[props.size].x} 
          font-semibold 
          ${props.round ? "rounded-lg" : ""}
          shadow-md 
          text-white
          text-${sizeMap[props.size].text}
          bg-${getColor(props.type)}-${getBgColor(props.plain)}
          hover:bg-${getColor(props.type)}-${getHoverBgColor(props.plain)} 
          border-none 
          cursor-pointer 
          m-1
          `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : null}
        {slots.default ? slots.default() : ""}{" "}
      </button>
    );
  },
});

const getBgColor = (plain: boolean) => {
  return plain ? "400" : "500";
};
const getHoverBgColor = (plain: boolean) => {
  return getBgColor(!plain);
};

const getColor = (type: IType) => {
  console.log(typeToColorMap.get(type), "type---", type);

  return typeToColorMap.get(type);
};
