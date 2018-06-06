/**
 * Created by jiangjianming@bmkp.cn on 2018/6/1.
 */
import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
const service = axios.create({
  baseURL: process.env.BASE_API,
  tomeout: 15000
})
//
// request 拦截器
service.interceptors.request.use(config => {
  config.headers['X-Token'] = 'sfwcv89sfeafadf'
  return config
},error => {
  console.log(error)
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code !==20000){
        Message({
          message: res.message,
          type:'error',
          duration: 5 *1000
        })
    }
    else {
      return response.data
    }

    if(res.code === 50008 || res.code ===50012){
      MessageBox.confirm('你已经被登出，请重新登录','确定登出',{
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        location.reload()
      })
    }
    return Promise.reject('error')
  },
  error => {
  console.log('err' + error)// for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
)
export default service