const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicpath: process.env.NODE_ENV === 'production'
? '/VueJS/'
: '/'
})
