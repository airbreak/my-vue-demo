import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Computed from '@/pages/computed.vue'

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
    }
  ]
})
