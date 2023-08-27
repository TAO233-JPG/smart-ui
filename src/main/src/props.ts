import { ExtractPropTypes } from "vue";

export const Props = {
  padding: {
    type: [Number, String],
  },
};

export type SMainProps = ExtractPropTypes<typeof Props>;
