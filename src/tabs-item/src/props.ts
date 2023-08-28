import type { ExtractPropTypes } from "vue";

export const Props = {
  /** 每个标签的 key */
  name: {
    type: [Number, String],
    required: true,
    default: [Number, String],
  },
  /** label 上显示的文字 */
  label: {
    type: String,
    required: true,
    default: String,
  },
};

export type STabsItemProps = ExtractPropTypes<typeof Props>;
