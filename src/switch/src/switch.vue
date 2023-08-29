<template>
  <div
    :class="['s-switch', { 's-switch__disabled': props.disabled }]"
    :style="styles"
  >
    <div
      :class="[
        's-switch__input',
        `s-switch__${props.size}`,
        { 's-switch__square': props.square, 's-switch__active': modelValue },
      ]"
      @click="handleClick"
    >
      <span
        :class="[
          's-switch__roll',
          {
            's-switch__roll-active': modelValue,
          },
        ]"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from "./props";
import { CSSProperties, computed } from "vue";

defineOptions({ name: "SSwitch" });

// eslint-disable-next-line no-undef
const modelValue = defineModel<boolean>({ default: false, type: Boolean });

const handleClick = () => {
  console.log(111);
  if (props.disabled) return;

  modelValue.value = !modelValue.value;
};

const props = defineProps(Props);

const styles = computed<CSSProperties>(() => {
  return {
    "--switch-close-color": props["closeColor"],
    "--switch-active-color": props["activeColor"],
  };
});
</script>

<style></style>
