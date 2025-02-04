<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router'
import router from '../router'

const loadingBar = useLoadingBar()

router.beforeEach(() => loadingBar?.start())
router.afterEach(() => loadingBar?.finish())
</script>
