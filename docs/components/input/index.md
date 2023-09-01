# 输入框 input

- size: `small` `middle` `large`
- width 自定义宽度
- type: `text` `password` `number`
- search, searchText 搜索按钮
- disabled, readonly
- placeholder
- clear 可清除
- enterSearch 按下回车进行搜索

## 尺寸 size

:::demo

```vue
<template>
  <s-input v-model="v" />
  <s-input v-model="v" size="small" />
  <s-input v-model="v" size="large" />
</template>
<script setup>
import { ref } from "vue";
const v = ref("");
</script>

<style>
.s-input {
  margin: 10px;
}
</style>
```

:::

## width 自定义宽度

:::demo

```vue
<template>
  <s-input v-model="v" width="200" />
</template>
<script setup>
import { ref } from "vue";
const v = ref("");
</script>

<style>
.s-input {
  margin: 10px;
}
</style>
```

:::

## 类型 type

:::demo

```vue
<template>
  <s-input v-model="v" />
  <s-input v-model="v" type="password" />
  <s-input v-model="v1" type="number" />
</template>

<script setup>
import { ref } from "vue";

const v = ref("");
const v1 = ref(23);
</script>
<style>
.s-input {
  margin: 10px;
}
</style>
```

:::

## search, searchText 搜索按钮

:::demo

```vue
<template>
  <s-input v-model="v" search />
  <s-input v-model="v" search searchText="Go" />
</template>

<script setup>
import { ref } from "vue";

const v = ref("");
</script>
<style>
.s-input {
  margin: 10px;
}
</style>
```

:::

## disabled, readonly

:::demo

```vue
<template>
  <s-input v-model="v" />
  <s-input v-model="v" disabled />
  <s-input v-model="v" readonly />
</template>

<script setup>
import { ref } from "vue";
const v = ref("");
</script>
<style>
.s-input {
  margin: 10px;
}
</style>
```

:::

## placeholder

:::demo

```vue
<template>
  <s-input v-model="v" placeholder="输入." />
</template>

<script setup>
import { ref } from "vue";

const v = ref("");
</script>
<style>
.s-input {
  margin: 10px;
}
</style>
```

:::

## clear 可清除

:::demo

```vue
<template>
  <s-input v-model="v" clear />
</template>

<script setup>
import { ref } from "vue";

const v = ref("");
</script>
<style>
.s-input {
  margin: 10px 0;
}
</style>
```

:::
