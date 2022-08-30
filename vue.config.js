const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir: 'serve/app/public', //打包输出目录
    productionSourceMap: false, // 打包时不生成.map文件
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})