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
          path: '/setup',
          name: 'setup',
          redirect: 'feature',
          children: [
            {
              path: 'feature',
              name: 'feature',
              component: () => import("@/views/setup/SetupFeature.vue")
            },
            {
              path: 'return',
              name: 'return',
              component: () => import("@/views/setup/SetupReturn.vue")
            },
            {
              path: 'relation',
              name: 'relation',
              component: () => import("@/views/setup/SetupRelation.vue")
            },
            {
              path: 'syntactic-sugar',
              name: 'syntactic-sugar',
              component: () => import("@/views/setup/SetupSyntacticSugar.vue")
            }
          ]
        },
      ]
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('@/views/AboutView.vue')
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
