import { CSSProperties, computed } from "vue";
import { setUnit } from "../utils/helper";

type CSSKey = keyof CSSProperties;
export const useStyles = <T extends Record<string, any>>(
  props: T,
  options: Array<CSSKey & keyof typeof props>
) => {
  const styles = computed(() => {
    const _style: Record<string, string> = {};
    options.forEach((opt) => {
      props[opt] && (_style[opt] = setUnit(props[opt]));
    });
    return _style;
  });

  return styles as unknown as CSSProperties;
};
