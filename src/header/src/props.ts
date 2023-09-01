import { ExtractPropTypes } from "vue";
export const Props = {
  height: {
    type: [Number, String],
    default: "60",
  },
  padding: {
    type: [Number, String],
  },
};

export type SHeaderProps = ExtractPropTypes<typeof Props>;
