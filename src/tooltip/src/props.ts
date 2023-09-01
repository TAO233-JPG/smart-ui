import { ExtractPropTypes, PropType } from "vue";
import { STooltipPositon, STooltipState } from "./interface";

export const Props = {
  content: {
    type: String,
    default: "",
  },

  position: {
    type: String as PropType<STooltipPositon>,
    default: "top",
  },

  state: {
    type: String as PropType<STooltipState>,
    default: "hover",
  },
};

export type STooltipProps = ExtractPropTypes<typeof Props>;
