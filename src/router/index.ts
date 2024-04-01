import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: '/vue',
          name: 'vue',
          redirect: '001',
          children: new Array(23).fill(0).map((item, index) => {
            const path = String(index + 1).padStart(3, "0")
            return {
              path,
              name: path,
              component: () => import(`@/views/vue/${path}/${path}-Index.vue`)
            }
          })
        },
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/exception/404/index.vue'),
    },

    {
      path: '/500',
      name: '500',
      component: () => import('@/views/exception/500/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: '/404',
    },
  ]
})

export default router
