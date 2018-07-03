import request from '@/utils/request'

export function doLogin (info) {
  return request({
    url: '/v1/login',
    type: 'post',
    data: {
      account: info.account,
      pass: info.pass
    }
  })
}
