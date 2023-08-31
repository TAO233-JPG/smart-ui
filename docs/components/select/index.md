# select 选择器

- 使用 `v-model` 绑定变量
- 使用 options 添加选项
- 使用 `width` 自定义宽度
- `onchange` 监听选项变化

:::demo

```vue
<template>
  cur：{{ val }}
  <div class="container">
    <s-select
      v-model="val"
      :options="opts"
      :onChange="() => console.log('change')"
    />
    <s-select v-model="val" :options="opts" width="400" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const val = ref("");

const opts = ["选项1", "选项2", "选项3"];
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
```

:::
