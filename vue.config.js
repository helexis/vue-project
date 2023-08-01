const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    /* prefetch 기능 삭제 */
    config.plugins.delete('prefetch');
  }
})
