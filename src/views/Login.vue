<template>
  <n-h1 style="--font-zise: 60px; --font-weight: 100">Login Page</n-h1>
  <n-card size="large" style="--padding-bottom: 30px">
    <n-h2 style="--font-weight: 400">Sign-in</n-h2>
    <n-form size="large" :rules="rules" :model="model">
      <n-form-item-row label="Username" path="username">
        <n-input v-model:value="model.username" placeholder="Input your username" />
      </n-form-item-row>
      <n-form-item-row label="Password" path="password">
        <n-input v-model:value="model.password" type="password" placeholder="Input your password" />
      </n-form-item-row>
    </n-form>
    <n-button
      type="primary"
      size="large"
      block
      :loading="loading"
      :disabled="disabled"
      @click="handleLogin"
      >Sign in</n-button
    >
  </n-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const rules = {
  username: {
    required: true,
    message: 'Username is required.',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: 'Password is required.',
    trigger: 'blur',
  },
}
const model = ref({
  username: 'chenghuai',
  password: 'chenghuai',
})

const loading = ref(false)

const disabled = computed<boolean>(() => model.value.username === '' || model.value.password === '')

const handleLogin = async (e: Event) => {
  console.log(e)
}
</script>

<style scoped>
.n-h1 {
  margin: 20vh auto 20px;
  text-align: center;
  letter-spacing: 5px;
  opacity: 0.8;
}

.n-card {
  margin: 0 auto;
  max-width: 380px;
  box-shadow: var(--box-shadow);
}
</style>
