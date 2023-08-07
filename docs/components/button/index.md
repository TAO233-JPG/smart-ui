# button

:::demo

```vue
<template>
  <div>
    type
    <SButton>普通按钮</SButton>
    <SButton type="primary">蓝色按钮</SButton>
    <SButton type="success">绿色按钮</SButton>
    <SButton type="info">灰色按钮</SButton>
    <SButton type="warning">黄色按钮</SButton>
    <SButton type="danger">红色按钮</SButton>
  </div>

  <div>
    plain
    <SButton plain>普通按钮</SButton>
    <SButton type="primary" plain>蓝色按钮</SButton>
    <SButton type="success" plain>绿色按钮</SButton>
    <SButton type="info" plain>灰色按钮</SButton>
    <SButton type="warning" plain>黄色按钮</SButton>
    <SButton type="danger" plain>红色按钮</SButton>
  </div>

  <div>
    round
    <SButton round>普通按钮</SButton>
    <SButton type="primary" :plain="false" round>蓝色按钮</SButton>
    <SButton type="success" plain round>绿色按钮</SButton>
    <SButton type="info" plain round>灰色按钮</SButton>
    <SButton type="warning" round>黄色按钮</SButton>
    <SButton type="danger" round>红色按钮</SButton>
  </div>

  <div>
    size
    <SButton>普通按钮</SButton>
    <SButton size="small">small 按钮</SButton>
    <SButton size="medium">medium 按钮</SButton>
    <SButton size="large">large 灰色按钮</SButton>
  </div>

  <div>
    icon
    <SButton>普通按钮</SButton>
    <SButton icon="search">按钮</SButton>
    <SButton icon="edit">按钮</SButton>
    <SButton icon="check">灰色按钮</SButton>
    <SButton icon="delete">按钮</SButton>
    <SButton icon="add">灰色按钮</SButton>
    <SButton icon="share"> 按钮</SButton>
  </div>

  <SButton>普通按钮</SButton>
  <SButton icon="search" round></SButton>
  <SButton icon="edit" round></SButton>
  <SButton icon="check" round></SButton>
  <SButton icon="delete" round></SButton>
  <SButton icon="add" round></SButton>
  <SButton icon="share" round> </SButton>
</template>
```

:::
