import { asyncRouteMap, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param {Array} roles
 * @param {object} route
 */
function hasPermIssion (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role =>
      route.mata.roles.indexOf(role) >= 0
    )
  } else {
    return true
  }
}

/**
 * @param {object} asyncRouteMap
 * @param {Array} roles
 */
function filterAsyncRouter (asyncRouteMap, roles) {
  const accessedRouters = asyncRouteMap.filter(route => {
    if (hasPermIssion(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    router: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.router = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GANERATE_ROUTES ({commit}, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouteMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouteMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
