import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Computed from '@/pages/computed.vue'
import DebounceSearch from '@/pages/debounceSearch.vue'
import testform from '@/pages/testform.vue'
import mockjs from '@/pages/mockjs.vue'
import upload from '@/pages/upload.vue'
import loadmore from '@/pages/loadMoreAndPush.vue'
import goods from '@/pages/goods.vue'

Vue.use(Router)
export default new Router({
  routes: [
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
      component: testform
    },
    {
      path: '/mockjs',
      name: 'mockjs',
      component: mockjs
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: loadmore
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ]
})
