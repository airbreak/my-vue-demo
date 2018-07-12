import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', name: 'login', component: () => import('@/pages/login'), hidden: false },
  { path: '/404', name: '404', component: () => import('@/pages/error/404'), hidden: false },
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
    redirect: '/computed/index',
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
    path: '/operation',
    name: 'operation',
    component: Layout,
    redirect: '/operation/debounce',
    meta: { title: 'operation', icon: 'operate', roles: ['normal'] },
    children: [
      {
        path: 'debounce',
        name: 'debounce',
        component: () => import('@/pages/debounceSearch'),
        meta: { title: 'debounce', icon: 'icon_query', roles: ['normal'] }
      },
      {
        path: '/loadmore',
        name: 'loadmore',
        component: () => import('@/pages/loadMoreAndPush'),
        meta: { title: 'loadmore', icon: 'more', roles: ['normal'] }
      }
    ]
  },
  {
    path: '/mockjs',
    name: 'mockjs',
    component: Layout,
    redirect: '/mockjs/index',
    meta: { title: 'mockjs', icon: 'mockjs', roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/pages/mockjs'),
        meta: { title: 'mockjs', icon: 'mockjs', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    component: Layout,
    redirect: '/component/upload',
    meta: { title: 'component', icon: 'component', roles: ['admin'] },
    children: [
      {
        path: 'upload',
        name: 'upload',
        component: () => import('@/pages/upload'),
        meta: { title: 'upload', icon: 'upload', roles: ['admin'] }
      }, {
        path: '/menu',
        name: 'menu',
        component: () => import('@/pages/navMenuDemo'),
        meta: { title: 'menu', icon: 'menu', roles: ['admin'] }
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('@/pages/testform'),
        meta: { title: 'form', icon: 'form', roles: ['normal'] }
      }
    ]
  },
  {
    path: '/shopping',
    name: 'shopping',
    redirect: '/shopping/list',
    component: Layout,
    meta: {title: 'Vuex', icon: 'shopping-bag', roles: ['normal']},
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
    ],
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]
