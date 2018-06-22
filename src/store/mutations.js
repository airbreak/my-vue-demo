import * as types from './mutation-types'
import Util from '../utils/utils'
const myUtil = new Util()
export default {
  // 获取购物车信息
  [types.GET_GOODS] (state) {
    let goods = myUtil.getStore('goods')
    if (!goods) {
      goods = ''
    }
    state.goods = JSON.parse(goods)
  },
  // 添加购物车
  [types.ADD_GOODS] (state, item) {
    item.status = true // 默认是选中状态
    let goods = state.goods
    let len = goods.length
    let hasFlag = false
    for (let i = 0; i < len; i++) {
      if (goods[i].id === item.id) {
        goods[i].count += item.count
        hasFlag = true
        break
      }
    }
    if (!hasFlag) {
      goods.push({ ...item })
    }
    state.goods = goods
    myUtil.setStore('goods', state.goods) // 本地缓存
  },
  [types.ADD_GOODS111] (state, good) {
    let goods = state.goods
    if (goods[good.id]) {
      goods[good.id]['count'] += good.count
    } else {
      goods[good.id] = {...good}
    }
    state.goods = {...goods}
    myUtil.setStore('goods', state.goods) // 本地缓存
  },
  // 减购物车
  [types.REDUCE_GOODS] (state, item) {
    let goods = state.goods
    console.log(goods)
    let len = goods.length
    let counts = item.count
    for (let i = 0; i < len; i++) {
      if (goods[i].id === item.id) {
        goods[i].count -= counts
        // 如果各位为0，则删除
        if (goods[i].count === 0) {
          goods.splice(i, 1)
        }
        break
      }
    }
    state.goods = goods
    myUtil.setStore('goods', state.goods) // 本地缓存
  }
}
