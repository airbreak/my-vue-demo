import * as types from './mutation-types'
import Util from '../utils/utils'
const myUtil = new Util()
export default {
  [types.SET_GOODS] (state) {
    let goods = myUtil.getStore('goods')
    if (!goods) {
      goods = '{}'
    }
    state.goods = JSON.parse(goods)
  },
  [types.ADD_GOODS] (state, {
    id,
    count
  }) {
    let goods = state.goods
    if (goods[id]) {
      goods[id]['count'] += count
    } else {
      goods[id] = {
        id: id,
        count: count
      }
    }
    state.goods = {...goods}
    myUtil.setStore('goods', state.goods) // 本地缓存
  },
  [types.ADD_GOODS1] (state, good) {
    let goods = state.goods1
    if (goods[good.id]) {
      goods[good.id]['count'] += good.count
    } else {
      goods[good.id] = good
    }
    state.goods1 = { ...goods }
    myUtil.setStore('goods1', state.goods1) // 本地缓存
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
  },
  [types.ADD_COUNTS] (state, count) {
    state.counts += count
    console.log('counts:' + state.counts)
  }
}
