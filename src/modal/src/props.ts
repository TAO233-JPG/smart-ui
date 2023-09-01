import { ExtractPropTypes } from "vue";

export const Props = {
  show: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: "Tip",
  },

  content: {
    type: String,
    default: "Smart UI ...........",
  },
  width: {
    type: [String, Number],
    default: "350",
  },

  borderRadius: {
    type: [String, Number],
    default: 0,
  },

  confirmText: {
    type: String,
    default: "confirm",
  },
  cancelText: {
    type: String,
    default: "cancel",
  },
};

export type SModalProps = ExtractPropTypes<typeof Props>;
