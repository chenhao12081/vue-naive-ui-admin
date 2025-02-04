<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬" size="huge">
    <template #footer>
      <n-button>返回首页</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts"></script>

<style scoped>
.n-result {
  margin: 20vh auto 0;
}
</style>
