import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) {
    return true
  }
  if (!permissionRoles) {
    return true
  }
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

function isInWhiteList (url) {
  let index = whiteList.findIndex((item) => {
    return url.indexOf(item) >= 0
  })
  return index >= 0
}

const whiteList = ['/login', '/wxauthor/123']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === 'login') {
      next({path: '/'})
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GET_USER_INFO').then(res => {
          const roles = res.data.roles
          store.dispatch('GANERATE_ROUTES', { roles }).then(() => {
            console.log(store.getters.addRouters)
            router.addRoutes(store.getters.addRouters)
            next({...to, replace: true})
          })
        }).catch((err) => {
          Message.error(err || '验证失败')
          next({path: '/'})
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: {noGoBack: true}
          })
        }
      }
    }
  } else {
    if (isInWhiteList(to.path)) {
      next()
    } else {
      next('/login')

      // TODO 测试微信公众号授权登录
      // var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
      //   'appid=wx933f4149e681606e' +
      //   '&redirect_uri=' + encodeURI('http://3bwnc6.natappfree.cc/my-vue-demo/dist/index.html#/wxauthor') +
      //   '&response_type=code&scope=snsapi_userinfo' +
      //   '&state=STATE#wechat_redirect'
      // window.location.href = url
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
