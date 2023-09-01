<template>
  <aside class="s-aside" :style="{ ...styles }">
    <slot />
  </aside>
</template>

<script setup lang="ts">
import { useStyles } from "../../_hooks/useStyles";
import { Props } from "./props";
defineOptions({ name: "SAside" });

const props = defineProps(Props);

const styles = useStyles(props, ["width"]);
</script>
