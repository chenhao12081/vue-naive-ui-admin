import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'layout',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Sign In',
    },
  },
  {
    name: 'not-found',
    path: '/:path*',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404',
    },
  },
]

export default routes
