<template>
  <button
    ref="FButtonRef"
    role="button"
    tabindex="0"
    :class="classList"
    :disabled="disabled"
    :name="name"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { Props, useButton } from "./props";
defineOptions({ name: "SButton" });

const props = defineProps(Props);
const classList = useButton(props);
</script>
