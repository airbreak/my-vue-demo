'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://www.easy-mock.com/mock/5b150fd9c091db645c41465a/my-vue-demo"'
  // BASE_API: '"http://v.cn/api"'
})
