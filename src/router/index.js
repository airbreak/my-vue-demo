import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', name: 'login', component: () => import('@/pages/login'), hidden: false },
  { path: '/404', name: 'login', component: () => import('@/pages/error/404'), hidden: true },
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
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/debounceSearch',
    name: 'debounceSearch',
    component: Layout,
    redirect: '/debounceSearch/index',
    meta: {title: 'debounceSearch', icon: 'search'},
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/pages/debounceSearch'),
        meta: { title: 'debounceSearch', icon: 'search' }
      }
    ]
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
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPage',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: () => import('@/pages/error/401'), name: 'page401', meta: { title: 'page401', noCache: true } },
      { path: '404', component: () => import('@/pages/error/404'), name: 'page404', meta: { title: 'page404', noCache: true } }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
