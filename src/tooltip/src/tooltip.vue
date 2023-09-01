<template>
  <div :class="classList" :content="props.content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "STooltip" });
import { Props } from "./props";
import { computed } from "vue";

const props = defineProps(Props);

const classList = computed(() => {
  return [
    `s-tooltip`,
    `s-tooltip__${props.position}`,
    `s-tooltip__${props.state}`,
  ];
});
</script>
