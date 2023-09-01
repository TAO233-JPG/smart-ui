<template>
  <div class="s-modal" v-show="show">
    <div class="s-modal-container" :style="{ ...styles }">
      <slot name="header">
        <h2>{{ props.title }}</h2>
        <span class="s-modal-container-close" @click="handleCancel">×</span>
      </slot>
      <slot name="default">
        <article class="s-modal-container-content">
          {{ props.content }}
        </article>
      </slot>
      <slot name="footer">
        <footer class="s-modal-container-footer">
          <SButton size="small" @click="handleConfirm">{{
            props.confirmText
          }}</SButton>
          <SButton type="info" size="small" @click="handleCancel">{{
            props.cancelText
          }}</SButton>
        </footer>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStyles } from "../../_hooks/useStyles";
import SButton from "../../button";
import { Props } from "./props";

defineOptions({ name: "SModal" });
const emit = defineEmits(["confirm", "cancel"]);
const props = defineProps(Props);
// eslint-disable-next-line no-undef
const show = defineModel<boolean>("show", {
  default: false,
  type: Boolean,
});

const styles = useStyles(props, ["width", "borderRadius"]);

const handleConfirm = () => {
  show.value = false;

  emit("confirm");
};
const handleCancel = () => {
  show.value = false;

  emit("cancel");
};
</script>
