'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://dsn.apizza.net/mock/21032d6612a1e591a4a28c9c6d571cec/"'
  BASE_API: '"http://mock.eolinker.com/k5Y9mjp9b4bf5cdb7381fe38284a05d44d0631cf253c095?uri="'
  // BASE_API: '"http://v.cn/api"'
})
