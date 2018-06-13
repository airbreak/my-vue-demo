import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugin: debug ? [createLogger()] : []
})
