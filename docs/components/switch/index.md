# switch 开关

- 大小 `size`: `small` `middle` `large`
- 禁用状态 `diabled`: `true` `false`
- 方形 `square`
- 颜色 `close-color` `active-color`

## size 尺寸

:::demo

```vue
<template>
  <SSwitch size="small" v-model="v" />
  <SSwitch size="middle" v-model="v" />
  <SSwitch size="large" v-model="v" />
</template>

<script setup>
import { ref } from "vue";

const v = ref(false);
</script>
```

:::

## disabled 禁用

:::demo

```vue
<template>
  <SSwitch v-model="v" disabled />
  <SSwitch v-model="v1" />
</template>

<script setup>
import { ref } from "vue";

const v = ref(false);
const v1 = ref(false);
</script>
```

:::

## square 方形

:::demo

```vue
<template>
  <SSwitch v-model="v" square />
</template>

<script setup>
import { ref } from "vue";

const v = ref(false);
</script>
```

:::

## 自定义颜色 close-color active-color

:::demo

```vue
<template>
  <SSwitch v-model="v" close-color="red" active-color="blue" />
</template>

<script setup>
import { ref } from "vue";

const v = ref(false);
</script>
```

:::
