/**
 * Created by jiangjianming@bmkp.cn on 2018/6/1.
 */
// import { getToken } from '@/utils/auth'
import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
const service = axios.create({
  baseURL: process.env.BASE_API,
  tomeout: 15000
})
//
// request 拦截器
service.interceptors.request.use(config => {
  // config.headers['X-Token'] = getToken()
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 20000) {
      return response.data
    } else {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 50008 || res.code === 50012) {
        MessageBox.confirm('你已经被登出，请重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          location.reload()
        })
      }
      if (res.code === 50000) {
        MessageBox.alert('数据加载失败')
      }
      return null
    }
  },
  error => {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        break
      case 401:
        error.message = '未授权，请登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '网关错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
        error.message = ''
        break
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
