<template>
  <div class="s-select" :style="styles">
    <s-trigger ref="triggerRef">
      <template #default>
        <s-input
          v-model="modelValue"
          readonly
          :width="props.width"
          :on-focus="() => (isFocus = true)"
          :on-blur="() => (isFocus = false)"
        />
        <span
          :class="['s-select__arrow', { 's-select__arrow-active': isFocus }]"
          >＞</span
        >
      </template>

      <template #content>
        <div class="s-select__content" :style="styles">
          <div
            class="s-select__content-item"
            v-for="(item, idx) in props.options"
            :key="idx"
            @click="handleClick(item)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </s-trigger>

    <teleport to="body"> </teleport>
  </div>
</template>
<script setup lang="ts">
import SInput from "../../input";
import STrigger from "../../trigger";
import { Props } from "./props";
import { ref, computed, watch } from "vue";
import { STriggerInstance } from "../../trigger/index";
defineOptions({ name: "SSelect" });

// eslint-disable-next-line no-undef
const modelValue = defineModel<string | number>();

const props = defineProps(Props);

const keyword = ref<string | number>("");
const isFocus = ref(false);
const triggerRef = ref<STriggerInstance | null>(null);
const handleClick = (item: string | number) => {
  setValue(item);
};

const setValue = (val: string | number) => {
  keyword.value = val;

  triggerRef.value?.colse();
  modelValue.value = val;
};

const styles = computed(() => {
  return {
    "--select-width": props.width + "px",
  };
});

watch(
  () => modelValue.value,
  (newVal, oldValue) => {
    props.onChange && props.onChange(newVal as string, oldValue);
  }
);
</script>
