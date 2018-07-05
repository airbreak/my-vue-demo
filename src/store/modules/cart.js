import Util from '../../utils/utils'
import { stat } from 'fs';
const myUtil = new Util()
const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: state => state.added,

  cartTotalPrice: (state) => {
    return state.added.reduce((total, produt) => {
      return total + produt.price * produt.quantity
    }, 0)
  }
}

// action
const actions = {
  checkout ({commit, state}, produts) {
    // const savedCartItems = [...state.added]
    commit('setCheckoutStatus', null)
    //  清空购物车
    commit('setCartItems', { item: [] })
    // shop.buyProducts()
  },

  addProductToCart ({state, commit}, {product, isCheckInventory = true}) {
    commit('setCheckoutStatus', null)
    let inventory = 0
    if (!isCheckInventory) {
      inventory = 1
    } else {
      inventory = product.inventory
    }
    if (inventory > 0) {
      const cartItem = state.added.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', {id: product.id, name: product.name, price: product.price})
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      if (isCheckInventory) {
        commit('decrementProductInventory', { id: product.id, isCheckInventory: isCheckInventory })
      }
    }
  },
  decreaseProductFromCart ({ state, commit }, product) {
    const cartItem = state.added.find(item => item.id === product.id)
    if (cartItem.quantity > 1) {
      commit('decreaseProductFromCart', cartItem)
    }
  },

  getAllCartProducts ({commit}) {
    let str = myUtil.getStore('shopping-cart')
    if (!str) {
      str = '[]'
    }
    let items = JSON.parse(str)
    commit('setCartItems', { items: items })
  }
}

const mutations = {
  pushProductToCart (state, {id, name, price}) {
    state.added.push({
      id,
      name,
      price,
      quantity: 1
    })
    myUtil.setStore('shopping-cart', state.added)
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity++
    myUtil.setStore('shopping-cart', state.added)
  },

  decreaseProductFromCart (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity--
    myUtil.setStore('shopping-cart', state.added)
  },

  setCartItems (state, {items}) {
    state.added = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
