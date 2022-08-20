const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    dec: {
        proxyTable: {
            '/api': {
                target: 'http://pv.sohu.com',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    }
})