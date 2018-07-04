import vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'
// import shopping from './modules/shopping'
import products from './modules/product'
import cart from './modules/cart'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    products,
    cart,
    app
  }
})
