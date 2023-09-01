<template>
  <div class="s-trigger" ref="triggerRef">
    <div
      :class="['s-trigger__trigger', { 's-trigger__disabled': props.disabled }]"
    >
      <slot></slot>
    </div>
    <teleport to="body">
      <div class="s-trigger__content" v-show="visible" :style="styles">
        <slot name="content"></slot>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Props } from "./props";
import useTrigger from "../../_hooks/useTrigger";

defineOptions({
  name: "STrigger",
});

const props = defineProps(Props);

const triggerRef = ref<HTMLDivElement | undefined>();

const { visible, styles, colse } = useTrigger(props, triggerRef);

defineExpose({ colse, open });
</script>
