import { ExtractPropTypes, PropType } from "vue";
import { SwitchSize } from "./interface";

export const Props = {
  size: {
    type: String as PropType<SwitchSize>,
    default: "middle",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
  "close-color": {
    type: String,
  },
  "active-color": {
    type: String,
  },
};

export type SSwitchProps = ExtractPropTypes<typeof Props>;
