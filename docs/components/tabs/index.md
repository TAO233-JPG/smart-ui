# Tabs 选项卡

:::demo

```vue
<template>
  <s-tabs v-model:modelValue="curTab">
    <s-tabs-item name="user" label="User"
      ><div class="content">User</div>
    </s-tabs-item>
    <s-tabs-item name="config" label="Config"
      ><div class="content">Config</div>
    </s-tabs-item>
  </s-tabs>
</template>

<script setup>
import { ref } from "vue";
const curTab = ref("user");
</script>

<style>
.content {
  padding: 20px;
}
</style>
```

:::

:::demo

```vue
<template>
  <s-tabs v-model:modelValue="curTab" type="card" position="right">
    <s-tabs-item name="user" label="User"
      ><div class="content">User</div>
    </s-tabs-item>
    <s-tabs-item name="config" label="Config"
      ><div class="content">Config</div>
    </s-tabs-item>
  </s-tabs>
</template>

<script setup>
import { ref } from "vue";
const curTab = ref("user");
</script>

<style>
.content {
  padding: 20px;
}
</style>
```

:::

:::demo

```vue
<template>
  <s-tabs v-model:modelValue="curTab" type="segment" position="left">
    <s-tabs-item name="user" label="User"
      ><div class="content">User</div>
    </s-tabs-item>
    <s-tabs-item name="config" label="Config"
      ><div class="content">Config</div>
    </s-tabs-item>
  </s-tabs>
</template>

<script setup>
import { ref } from "vue";
const curTab = ref("user");
</script>

<style>
.content {
  padding: 20px;
}
</>
```

:::
