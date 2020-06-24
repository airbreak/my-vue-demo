import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', name: 'login', component: () => import('@/pages/login'), hidden: false },
  { path: '/404', name: '404', component: () => import('@/pages/error/404'), hidden: false },
  {
    path: '/wxauthor/:code',
    name: 'wxauthor',
    component: () => import('@/pages/wxauthor'),
    hidden: false
  },
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
        meta: { title: 'computed', icon: 'computer', keepAlive: true },
        component: () => import('@/pages/computed')
      }
    ]
  }
]

export default new Router({
  mode: 'history', // history模式
  base: '/history/', // apache 部署时，在www的 history目录下
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/operation',
    name: 'operation',
    component: Layout,
    redirect: '/operation/debounce',
    meta: { title: 'operation', icon: 'operate', roles: ['normal'], keepAlive: true },
    children: [
      {
        path: 'debounce',
        name: 'debounce',
        component: () => import('@/pages/debounceSearch'),
        meta: { title: 'debounce', icon: 'icon_query', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'loadmore',
        name: 'loadmore',
        component: () => import('@/pages/loadMoreAndPush'),
        meta: { title: 'loadmore', icon: 'more', roles: ['normal'], keepAlive: true }
      }
    ]
  },
  {
    path: '/mockjs',
    name: 'mockjs',
    component: Layout,
    redirect: '/mockjs/index',
    meta: { title: 'mockjs', icon: 'mockjs', roles: ['admin'], keepAlive: true },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/pages/mockjs'),
        meta: { title: 'mockjs', icon: 'mockjs', roles: ['admin'], keepAlive: true }
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    component: Layout,
    redirect: '/component/upload',
    meta: { title: 'component', icon: 'component', roles: ['admin', 'normal'], keepAlive: true },
    children: [
      {
        path: 'upload',
        name: 'upload',
        component: () => import('@/pages/component/upload'),
        meta: { title: 'upload', icon: 'upload', roles: ['admin'], keepAlive: true }
      }, {
        path: '/menu',
        name: 'menu',
        component: () => import('@/pages/component/navMenuDemo'),
        meta: { title: 'menu', icon: 'menu', roles: ['admin'], keepAlive: true }
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('@/pages/component/testform'),
        meta: { title: 'form', icon: 'form', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import('@/pages/component/pagination'),
        meta: { title: 'pagination', icon: 'pagination', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'slot',
        name: 'slot',
        component: () => import('@/pages/component/slot'),
        meta: { title: 'slot', icon: 'pagination', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'navbar',
        name: 'navbar',
        component: () => import('@/pages/component/navbar'),
        meta: { title: 'navbar', icon: 'navigation', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/pages/component/tree'),
        meta: { title: 'tree', icon: 'tree', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'qrcode',
        name: 'qrcode',
        component: () => import('@/pages/component/qrcode'),
        meta: { title: 'qrcode', icon: 'scan', roles: ['normal'], keepAlive: true }
      },
      {
        path: 'print',
        name: 'print',
        component: () => import('@/pages/component/print'),
        meta: { title: 'print', icon: 'scan', roles: ['normal'], keepAlive: true }
      }
    ]
  },
  {
    path: '/css',
    name: 'css',
    component: Layout,
    redirect: '/css/ballloader',
    meta: {title: 'css', icon: 'css', roles: ['normal'], keepAlive: false},
    children: [
      {
        path: 'ballloader',
        name: 'ballloader',
        component: () => import('@/pages/css/ballJumpStep'),
        meta: { title: 'ballloader', icon: 'ball', roles: ['normal'], keepAlive: false }
      },
      {
        path: 'rotateloader',
        name: 'rotateloader',
        component: () => import('@/pages/css/rotateloader'),
        meta: { title: 'rotateloader', icon: 'ball', roles: ['normal'], keepAlive: false }
      },
      {
        path: 'menuborder',
        name: 'menuborder',
        component: () => import('@/pages/css/menuborder'),
        meta: { title: 'menuborder', icon: 'ball', roles: ['normal'], keepAlive: false }
      },
      {
        path: 'soundwaveloader',
        name: 'soundwaveloader',
        component: () => import('@/pages/css/soundwaveloader'),
        meta: { title: 'soundwaveloader', icon: 'ball', roles: ['normal'], keepAlive: false }
      },
      {
        path: 'mixblendmode',
        name: 'mixBlendMode',
        component: () => import('@/pages/css/mixBlendMode'),
        meta: { title: 'css颜色混合', icon: 'ball', roles: ['normal'], keepAlive: false }
      }
    ]
  },
  {
    path: '/shopping',
    name: 'shopping',
    redirect: '/shopping/list',
    component: Layout,
    meta: { title: 'Vuex', icon: 'shopping-bag', roles: ['normal'], keepAlive: true },
    children: [
      {
        path: 'list',
        name: 'shopping-list',
        component: () => import('@/pages/shopping/list'),
        meta: { title: 'List', icon: 'goods-list', keepAlive: true }
      },
      {
        path: 'cart',
        name: 'shopping-cart',
        component: () => import('@/pages/shopping/cart'),
        meta: { title: 'Cart', icon: 'cart', keepAlive: true }
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('@/pages/shopping/detail'),
        meta: { title: 'List', icon: 'goods-list', keepAlive: true },
        hidden: true
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
