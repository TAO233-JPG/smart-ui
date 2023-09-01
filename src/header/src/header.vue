<template>
  <header class="s-header" :style="{ ...styles }">
    <slot />
  </header>
</template>

<script setup lang="ts">
import { Props } from "./props";
import { useStyles } from "../../_hooks/useStyles";

defineOptions({ name: "SHeader" });
const props = defineProps(Props);
const styles = useStyles(props, ["padding", "height"]);
</script>
