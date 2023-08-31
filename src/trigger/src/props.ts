import { ExtractPropTypes, PropType } from "vue";

export const Props = {
  trigger: {
    type: String as PropType<"hover" | "click">,
    default: () => "click",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type STriggerProps = ExtractPropTypes<typeof Props>;
