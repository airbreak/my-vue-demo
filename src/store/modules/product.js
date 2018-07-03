import { getGoodsList } from '../../api/goods'

const state = {
  all: []
}

const getters = {
  allProducts: state => state.all
}

const actions = {
  getAllProducts ({commit}) {
    getGoodsList(products => {
      commit('setProducts', products)
    })
  }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decremetentProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
