import vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import products from './modules/product'
import cart from './modules/cart'
import permission from './modules/permission'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    products,
    cart,
    app,
    user,
    permission
  }
})
