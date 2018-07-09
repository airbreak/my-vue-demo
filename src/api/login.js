import request from '@/utils/request'

export function doLogin (info) {
  return request({
    url: '/v1/login',
    // url: '/login',
    method: 'post',
    data: JSON.stringify({
      account: info.account,
      pass: info.pass
    })
  })
}

export function getInfo (token) {
  return request({
    url: '/v1/userinfo',
    method: 'get',
    params: {token}
  })
}
