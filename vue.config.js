const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //跨域
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      [process.env.VUE_APP_BASE_API]: {
        // 要代理的服务器地址  这里不用写 api
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true // 是否跨域
      }
    }
  }
})
