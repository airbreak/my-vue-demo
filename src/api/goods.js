import request from '@/utils/request'

export function getGoodsList () {
  return request({
    url: '/v1/goods',
    type: 'get'
  })
}
export function getQuestionsList () {
  return request({
    url: '/v1/question/list',
    type: 'get'
  })
}
