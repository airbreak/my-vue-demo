import { getGoodsList } from '../../api/goods'

const state = {
  all: [],
  isLoading: true
}

const getters = {
  allProducts: state => state.all,
  isLoading: state => state.isLoading
}

const actions = {
  getAllProducts ({commit}) {
    getGoodsList().then((products) => {
      commit('setProducts', products.data)
    })
  }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
    state.isLoading = false
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
