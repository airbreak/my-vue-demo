/**
 * Created by jiangjianming@bmkp.cn on 2018/6/4.
 */
import request from '@/utils/request'

export function getUserDetail(){
  return request({
    url: '/v1/user/detail',
    methon: 'get'
  })
}
