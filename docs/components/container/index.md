# container 布局

常见的一些网页布局，实现快速搭建页面结构

- s-container 外层容器, 可以实现垂直、水平、嵌套布局
- s-main 主体容器
- s-header 头部容器
- s-aside 侧栏容器
- s-footer 底部容器

:::demo

```vue
<template>
  <SContainer>
    <SAside> ASide</SAside>
    <SMain> Main </SMain>
  </SContainer>
  <hr />
  <SContainer>
    <SAside>ASide</SAside>
    <SContainer>
      <SHeader> Header</SHeader>
      <SMain> Main </SMain>
      <SFooter> Footer</SFooter>
    </SContainer>
  </SContainer>
</template>

<style lang="scss">
.s-header {
  background-color: #777;
}
.s-aside {
  height: 344px;
  background-color: #eee;
}

.s-main {
  background-color: #888;
}

.s-footer {
  background-color: #777;
}
</style>
```
