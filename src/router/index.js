import { createRouter, createWebHashHistory } from 'vue-router'
import HomeLayout from '@/layout/index'
import dictList from './modules/dictList'
import menuList from './modules/menuList'
import roleList from './modules/roleList'
import userList from './modules/userList'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: '<home-outlined/>'
        },
        component: () => import('@/views/index/index')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

export const privateRoute = [dictList, menuList, roleList, userList]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
