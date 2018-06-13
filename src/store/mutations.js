import * as types from './mutation-types'
import util from '../utils/utils'
const myUtil =  new util()
export default {
  [types.SET_GOODS] (state, goods) {
    state.goods = goods
  },
  [types.ADD_GOODS] (state, good) {
    let goods = state.goods
    let isInCart = false
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === good) {
        goods.count += good.count
        isInCart = true
      }
    }
    if (!isInCart) {
      goods.push(good)
    }
    myUtil.setStore('goods', goods) // 本地缓存
  },
  [types.CUT_GOOD] (state, good) {
    let goods = state.goods
    let isInCart = false
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === good) {
        if (goods.count === 1) {
          goods.splice(i, 1)
        } else {
          goods.count -= good.count
        }
        isInCart = true
      }
    }
    if (!isInCart) {
      alert('购物车没有该商品')
      return
    }
    myUtil.setStore('goods', goods) // 本地缓存
  }
}
