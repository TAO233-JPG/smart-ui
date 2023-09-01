<template>
  <span class="s-icon">
    <svg class="s-icon-svg" aria-hidden="true" :style="{ ...styles }">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="s-icon-info" :class="styleDot">
      {{ iconProps.badge }}
    </div>
  </span>
</template>
<script setup lang="ts">
import { Props, useIcon } from "./props";
import { computed } from "vue";

defineOptions({ name: "SIcon" });

const iconProps = defineProps(Props);

const { styles } = useIcon(iconProps);

const iconName = computed(() => `#smart-${iconProps.icon}`);
const styleDot = computed(() => {
  return { [`s-icon-dot`]: iconProps.dot && !iconProps.badge };
});
</script>
