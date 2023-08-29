<template>
  <div
    :class="[
      's-input',
      `s-input__${props.size}`,
      { 's-input__disabled': props.disabled },
    ]"
    :style="styles"
  >
    <div class="s-input__wrapper">
      <!-- 输入框 -->
      <input
        v-model="modelValue"
        class="s-input__input"
        :type="props.type"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :placeholder="props.placeholder"
        @input="handleInput"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="onBlur"
        @focus="onFocus"
      />
      <span
        v-if="props.clear && modelValue"
        class="s-input__clear-btn"
        @click="handleClear"
        >×</span
      >
    </div>
    <div v-if="props.search" class="f-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <s-button type="primary" :size="props.size">{{
          props.searchText
        }}</s-button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from "./props";
import { computed } from "vue";

defineOptions({ name: "SInput" });
// eslint-disable-next-line no-undef
const modelValue = defineModel<string | number>({
  default: "",
  type: [String, Number],
});

const props = defineProps(Props);

const styles = computed(() => {
  const arr = ["width"].filter((k) => !!props[k]);
  const _styles = {};
  arr.forEach((key) => {
    _styles[`--input-${key}`] = props[key] + "px";
  });
  return _styles;
});

const handleClear = () => {
  if (props.disabled) return;
  console.log(1);
  
  modelValue.value = "";
};

const handleSearch = (evt: MouseEvent | KeyboardEvent) => {
  if (props.onSearch) {
    props.onSearch(modelValue.value as string, evt);
  }
};

const handleInput = (evt: Event) => {
  if (props.onInput) {
    props.onInput(modelValue.value as string, evt);
  }
};

const handleChange = (evt: Event) => {
  if (props.onChange) {
    props.onChange(modelValue.value as string, evt);
  }
};
const handleEnter = (evt: KeyboardEvent) => {
  if (props.enterSearch) {
    handleSearch(evt);
  }
  if (props.onEnter) props.onEnter(modelValue.value as string, evt);
};
</script>
