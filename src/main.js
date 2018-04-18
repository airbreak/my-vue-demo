// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(BaiduMap,{
  ak: 'kbIUCIpdrQ7eikx2n9a4cU33'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})