<template>
  <div :style="{ ...styles }" class="s-main">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Props } from "./props";
import { CSSProperties, ComputedRef, computed } from "vue";

defineOptions({
  name: "SMain",
});

const props = defineProps(Props);

const styles: ComputedRef<CSSProperties> = computed(() => {
  return {
    padding: `${props.padding}px`,
  };
});
</script>
