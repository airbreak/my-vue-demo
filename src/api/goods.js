import request from '@/utils/request'

export function getGoodsList () {
  return request({
    url: '/goodslist',
    type: 'get'
  })
}
