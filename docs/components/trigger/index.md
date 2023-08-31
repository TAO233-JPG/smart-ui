# trigger 触发器

- 使用`trigger`指定触发方式: `hover` `click`
- 使用`disabled`禁用触发器

## 基础用法

:::demo

```vue
<template>
  <s-trigger style="margin: 20px">
    <s-button>点击</s-button>
    <template #content>
      <div class="box"></div>
    </template>
  </s-trigger>
  <s-trigger trigger="hover" style="margin: 20px">
    <s-button>hover</s-button>
    <template #content>
      <div class="box"></div>
    </template>
  </s-trigger>
  <s-trigger disabled style="margin: 20px">
    <s-button>禁用</s-button>
    <template #content>
      <div class="box"></div>
    </template>
  </s-trigger>
</template>
<style>
.box {
  width: 100px;
  height: 90px;
  background-color: #ff00ff;
  border: 1px solid #ccc;
}
</style>
```

:::
