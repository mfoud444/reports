import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { AdminLayout } from '@/views/admin/layout'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () =>  import('@/views/admin/report/index.vue'),
  },


  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    meta: { requiresAuth: false },
    redirect: '/admin/dashboard',
    children: [
        
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/index.vue'),
     
        meta: { requiresAuth: false },
      },
  
      {
        path: '/admin/control/:type?',
        name: 'control',
        component: () => import('@/views/admin/control/List.vue'),
        meta: { requiresAuth: false },
      },

      {
        path: '/admin/reports',
        name: 'reports',
        component: () => import('@/views/admin/report/index.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: '/admin/themes',
        name: 'themes',
        component: () => import('@/views/admin/themes1/index.vue'), 
        meta: { requiresAuth: false },
      },

      // {
      //   path: '/admin/settings',
      //   name: 'settings',
      //   component: () => import('@/views/admin/settings/index.vue'),
      //   meta: { requiresAuth: false },
      // },
   

      {
        path: '/admin/translation',
        name: 'translation',
        component: () => import('@/views/admin/translation/index.vue'), 
        meta: { requiresAuth: false },
      },
 
     
   
   
    ],

  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
    meta: { requiresAuth: false },
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
    meta: { requiresAuth: false },
  },


  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
