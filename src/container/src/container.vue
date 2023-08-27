<template>
  <div :class="['s-container', { 's-container__vertical': isVertical }]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Component, VNode, computed, useSlots } from "vue";
import { Props } from "./props";
defineOptions({ name: "SContainer" });

const props = defineProps(Props);

const slots = useSlots();

const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default();
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "SHeader" || tag === "SFooter";
    });
  }
  return false;
});
</script>
