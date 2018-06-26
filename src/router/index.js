import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Layout from '@/pages/layout/Layout.vue'
import Computed from '@/pages/computed.vue'
import DebounceSearch from '@/pages/debounceSearch.vue'
import Testform from '@/pages/testform.vue'
import Mockjs from '@/pages/mockjs.vue'
import Upload from '@/pages/upload.vue'
import Loadmore from '@/pages/loadMoreAndPush.vue'
import Goods from '@/pages/shopping/list.vue'
import Cart from '@/pages/shopping/cart.vue'
import Login from '@/pages/login.vue'
import NavMenuDemo from '@/pages/navMenuDemo.vue'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/computed',
    name: 'computed',
    component: Computed
  },
  {
    path: '/debounceSearch',
    name: 'debounceSearch',
    component: DebounceSearch
  },
  {
    path: '/testform',
    name: 'testform',
    component: Testform
  },
  {
    path: '/mockjs',
    name: 'mockjs',
    component: Mockjs
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/loadmore',
    name: 'loadmore',
    component: Loadmore
  },
  {
    path: '/menu',
    name: 'menu',
    component: NavMenuDemo
  },
  {
    path: '/shopping',
    name: 'shopping',
    redirect: '/shopping/list',
    component: Layout,
    children: [
      {
        path: 'list',
        component: Goods
      },
      {
        path: 'cart',
        component: Cart
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
