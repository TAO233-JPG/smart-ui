# tooltip 文字提示

- content: 文字描述
- position: 出现的位置 `top` `bottom` `left` `right`
- state: 状态 `hover` `active` `always`

## positon

:::demo

```vue
<template>
  <s-tooltip content="hover 展示">
    <s-button>hover</s-button>
  </s-tooltip>
  <s-tooltip content="hover 展示" position="bottom">
    <s-button>hover</s-button>
  </s-tooltip>
  <s-tooltip content="hover 展示" position="left">
    <s-button>hover</s-button>
  </s-tooltip>
  <s-tooltip content="hover 展示" position="right">
    <s-button>hover</s-button>
  </s-tooltip>
</template>

<script setup></script>

<style>
.s-tooltip {
  margin: 10px;
}
</style>
```

:::

## state

:::demo

```vue
<template>
  <s-tooltip content="hover 展示">
    <s-button>hover</s-button>
  </s-tooltip>
  <s-tooltip content="active 展示" state="active">
    <s-button>active(长按)</s-button>
  </s-tooltip>
  <s-tooltip content="always 展示" state="always">
    <s-button>always</s-button>
  </s-tooltip>
</template>

<script setup></script>

<style>
.s-tooltip {
  margin: 10px;
}
</style>
```

:::
