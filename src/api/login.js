import request from '@/utils/request'

export function getGoodsList (info) {
  return request({
    url: '/v1/login',
    type: 'post',
    data: {
      account: info.account,
      pass: info.pass
    }
  })
}
