# button

:::demo

```vue
<template>
  <div class="row">
    <SButton>default </SButton>
    <SButton type="primary">primary </SButton>
    <SButton type="success">success </SButton>
    <SButton type="info">info </SButton>
    <SButton type="warning">warning </SButton>
    <SButton type="danger">danger </SButton>
  </div>

  <div class="row">
    <SButton plain>plain</SButton>
    <SButton type="primary" plain>primary</SButton>
    <SButton type="success" plain>success</SButton>
    <SButton type="info" plain>info</SButton>
    <SButton type="warning" plain>warning</SButton>
    <SButton type="danger" plain>danger</SButton>
  </div>

  <div class="row">
    <SButton :plain="false" round>round</SButton>
    <SButton type="primary" :plain="false" round>primary</SButton>
    <SButton type="success" plain round>success</SButton>
    <SButton type="info" plain round>info</SButton>
    <SButton type="warning" round>warning</SButton>
    <SButton type="danger" round>danger</SButton>
  </div>

  <div class="row">
    <SButton size="small">small </SButton>
    <SButton size="middle">middle </SButton>
    <SButton size="large">large </SButton>
  </div>

  <!-- <div class="row">
    <SButton icon="search">按钮</SButton>
    <SButton icon="edit">按钮</SButton>
    <SButton icon="check">灰色按钮</SButton>
    <SButton icon="delete">按钮</SButton>
    <SButton icon="add">灰色按钮</SButton>
    <SButton icon="share"> 按钮</SButton>
  </div> -->

  <div class="row">
    <SButton disabled>disabled</SButton>
    <SButton type="primary" disabled>primary </SButton>
    <SButton type="success" disabled>success </SButton>
    <SButton type="info" disabled>info </SButton>
    <SButton type="warning" disabled>warning </SButton>
    <SButton type="danger" disabled>danger </SButton>
  </div>
  <div>
    <SButton circle>circle</SButton>
  </div>
</template>

<style>
.row {
  margin: 12px 0;
}

.row button {
  margin: 0 3px;
}
</style>
```

:::
