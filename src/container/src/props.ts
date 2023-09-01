import { PropType, ExtractPropTypes } from "vue";

export type SContainerDirection = "horizontal" | "vertical";

export const Props = {
  direction: {
    type: String as PropType<SContainerDirection>,
    default: (): SContainerDirection => "horizontal",
  },
};

/* 组件类型 */
export type SContainerProps = ExtractPropTypes<typeof Props>;
