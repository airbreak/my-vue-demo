import * as types from './mutation-types'
export default{
  goodsAsync ({ commit }, {goods}) {
    commit(types.SET_GOODS, goods)
  }
}
