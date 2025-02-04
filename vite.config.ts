import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import mockApp from './mock'

import type { Plugin } from 'vite'

const mock = (): Plugin => ({
  name: 'mock',
  configureServer: async (server) => {
    server.middlewares.use('/api', mockApp)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), mock()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
