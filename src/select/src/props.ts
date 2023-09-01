import { ExtractPropTypes, PropType } from "vue";
import { SSelectChange } from "./interface";

export const Props = {
  modelValue: {
    type: String,
  },
  width: {
    type: [String, Number],
    default: () => 200,
  },

  options: {
    type: Array as PropType<Array<string | number>>,
    default: [],
  },

  onChange: { type: Function as PropType<SSelectChange> },
};

export type SSelectProps = ExtractPropTypes<typeof Props>;
