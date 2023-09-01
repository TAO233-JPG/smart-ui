# Modal 布局

Modal 弹出一个对话框，适合需要定制性更大的场景。

:::demo

```vue
<template>
  <SModal
    v-model:show="show1"
    title="Hello"
    content="Smart UI............"
    :width="350"
    :borderRadius="10"
    :position="true"
    confirmText="confirm"
    cancelText="cancel"
  >
  </SModal>

  <SButton @click="handleSwitch"> switch</SButton>
</template>

<script setup>
import { ref } from "vue";
const show1 = ref(false);
const handleSwitch = () => {
  show1.value = !show1.value;
  console.log("+++, show", show1);
};
</script>
```

:::

自定义
:::demo

```vue
<template>
  <SModal
    v-model:show="show2"
    title="自定义"
    :width="350"
    :borderRadius="10"
    :position="true"
    confirmText="confirm"
    cancelText="cancel1"
  >
    <template #header> 自定义header </template>
    <template #default>
      <div>自定义content</div>
    </template>
    <template #footer>
      自定义footer <SButton type="primary" @click="handleClose">close</SButton>
    </template>
  </SModal>

  <SButton @click="handleSwitch"> switch</SButton>
</template>

<script setup>
import { ref } from "vue";
const show2 = ref(false);
const handleSwitch = () => {
  show2.value = !show2.value;
  console.log("+++, show", show2);
};

const handleClose = () => {
  show2.value = false;
  console.log("自定义关闭")
};
</script>
```
