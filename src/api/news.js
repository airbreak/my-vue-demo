/**
 * Created by jiangjianming@bmkp.cn on 2018/6/8.
 */
import request from '@/utils/request'

export function getNewsByPage (page) {
  return request({
    url: '/news/' + page + '/10',
    method: 'get'
  })
}
