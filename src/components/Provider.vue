<template>
  <n-config-provider>
    <n-global-style />
    <n-loading-bar-provider :theme="theme">
      <n-message-provider>
        <n-dialog-provider>
          <slot />
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'

const theme = ref(darkTheme)
</script>
