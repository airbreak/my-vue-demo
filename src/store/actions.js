import * as types from './mutation-types'
export default{
  goodsAsync ({ commit }, {age, goods}) {
    commit(types.SET_GOODS, goods)
  }
}
