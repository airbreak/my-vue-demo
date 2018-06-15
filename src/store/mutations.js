import * as types from './mutation-types'
import util from '../utils/utils'
const myUtil =  new util()
export default {
  [types.SET_GOODS] (state) {
    let goods = myUtil.getStore('goods')
    if (!goods) {
      goods = '[]'
    }
    state.goods = JSON.parse(goods)
  },
  [types.ADD_GOODS] (state, newGoods) {
    // let goods = myUtil.getStore('goods')
    let goods = state.goods
    let isInCart = false
    for (let i = 0; i < goods.length; i++) {
      if (state.goods[i].id === newGoods.id) {
        state.goods[i].count += newGoods.count
        isInCart = true
      }
    }
    if (!isInCart) {
      goods.push(newGoods)
    }
    myUtil.setStore('goods', goods) // 本地缓存
  },
  [types.CUT_GOODS] (state, newGoods) {
    let goods = state.goods
    let isInCart = false
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === newGoods.id) {
        if (goods.count === 1) {
          goods.splice(i, 1)
        } else {
          goods.count -= newGoods.count
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
