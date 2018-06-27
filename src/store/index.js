import vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    app
  },
  getters
})
