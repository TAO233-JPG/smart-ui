import { ExtractPropTypes } from "vue";

export const Props = {
  width: {
    type: [String, Number],
    default: "200px",
  },
};

export type SAsideProps = ExtractPropTypes<typeof Props>;
