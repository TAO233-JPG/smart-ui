# 快速开始

## 安装

```bash
pnpm install smart-ui-tao
npm install smart-ui-tao
yarn install smart-ui-tao
```

## 使用

### 全局引入

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import SmartUI from "smart-ui-tao";
import "smart-ui-tao/index.css";

createApp(App).use(SmartUI).mount("#app");
```

### 按需引入

```vue
<template>
  <SButton>按钮</SButton>
</template>

<script setup>
import { SButton } from "smart-ui-tao";
import "smart-ui-tao/theme/button.css";
</script>
```
