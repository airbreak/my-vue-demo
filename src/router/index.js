import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', name: 'login', component: () => import('@/pages/login'), hidden: false },
  { path: '/404', name: 'login', component: () => import('@/pages/404'), hidden: true },
  {
    path: '/',
    name: 'default',
    component: Layout,
    redirect: 'login'
  },
  {
    path: '/computed',
    name: 'computed',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'computed',
        meta: { title: 'computed', icon: 'computer' },
        component: () => import('@/pages/computed')
      }
    ]
  },
  {
    path: '/debounceSearch',
    name: 'debounceSearch',
    component: () => import('@/pages/debounceSearch')
  },
  {
    path: '/testform',
    name: 'testform',
    component: () => import('@/pages/testform')
  },
  {
    path: '/mockjs',
    name: 'mockjs',
    component: () => import('@/pages/mockjs')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/pages/upload')
  },
  {
    path: '/loadmore',
    name: 'loadmore',
    component: () => import('@/pages/loadMoreAndPush')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/pages/navMenuDemo')
  },
  {
    path: '/shopping',
    name: 'shopping',
    redirect: '/shopping/list',
    component: Layout,
    meta: { title: 'Vuex', icon: 'shopping-bag' },
    children: [
      {
        path: 'list',
        name: 'shopping-list',
        component: () => import('@/pages/shopping/list'),
        meta: { title: 'List', icon: 'goods-list' }
      },
      {
        path: 'cart',
        name: 'shopping-cart',
        component: () => import('@/pages/shopping/cart'),
        meta: { title: 'Cart', icon: 'cart' }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
