const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: (state, getters, rootState) => {
    return state.added.map(({id, quantity}) => {
      const produt = rootState.produts.all.find(produt => produt.id === id)
      return {
        title: produt.title,
        price: produt.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, produt) => {
      return total + produt.price * produt.quantity
    })
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

  addProductToCart ({state, commit}, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.added.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', {id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('decrementProductInventory', {id: product.id})
    }
  }
}

const mutations = {
  pushProductToCart (state, {id}) {
    state.added.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity++
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
