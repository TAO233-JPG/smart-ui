import {
  Ref,
  reactive,
  computed,
  CSSProperties,
  ref,
  onMounted,
  watch,
  onBeforeUnmount,
} from "vue";
import { STriggerProps } from "../trigger";

const useTrigger = (
  props: STriggerProps,
  node: Ref<HTMLDivElement | undefined>
) => {
  const position = reactive({ left: "0px", top: "0px" });

  const styles = computed<CSSProperties>(() => {
    return {
      "--trigger-left": position.left,
      "--trigger-top": position.top,
    };
  });

  const setPosition = () => {
    const element = node.value;
    if (!element) return;

    const { left, bottom } = element.getBoundingClientRect();

    position.left = `${left + window.scrollX}px`;
    position.top = `${bottom + window.scrollY}px`;
  };

  const visible = ref(false);

  const open = () => {
    if (props.disabled || visible.value) return;

    if (props.trigger === "click") {
      window.addEventListener("click", handleClickClose);
    } else {
      window.addEventListener("mouseover", handleHoverClose);
    }
    setPosition();

    window.addEventListener("resize", setPosition);
    visible.value = true;
  };

  const colse = () => {
    visible.value = false;
    window.removeEventListener("resize", setPosition);
    window.removeEventListener("mouseover", handleHoverClose);
    window.removeEventListener("click", handleClickClose);
  };

  const handleClickClose = (evt: MouseEvent) => {
    const element = evt.target as HTMLElement;

    if (
      element.closest(".s-trigger") ||
      element.closest(".s-trigger__content")
    ) {
      return;
    }
    colse();
  };
  const handleHoverClose = (evt: MouseEvent) => {
    const element = evt.target as HTMLElement;

    if (
      element.closest(".s-trigger") ||
      element.closest(".s-trigger__content")
    ) {
      return;
    }
    colse();
  };

  const addEventListener = () => {
    if (node.value) {
      if (props.trigger === "click") {
        node.value.addEventListener("click", open);
      } else {
        node.value.addEventListener("mouseenter", open);
      }
    }
  };
  /* 挂载事件 */
  onMounted(() => {
    addEventListener();
  });
  /* 监听触发器变化 */
  watch(
    () => props.trigger,
    () => addEventListener()
  );
  onBeforeUnmount(() => {
    node.value?.removeEventListener("click", open);
    node.value?.removeEventListener("mouseenter", open);
    node.value?.removeEventListener("mouseleave", colse);
  });
  return { styles, visible, colse, open };
};

export default useTrigger;
