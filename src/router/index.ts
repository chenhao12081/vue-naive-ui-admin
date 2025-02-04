import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

console.log('routes', routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(() => {
  // if (to.name === 'login') {
  //   return to.query.redirect?.toString() ?? '/'
  // }
})

export default router
