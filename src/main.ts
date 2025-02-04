import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Naive from './naive'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Naive)

app.mount('#app')
