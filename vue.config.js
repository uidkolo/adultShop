const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: './',
    outputDir: 'dist', //打包输出目录
    assetsDir: './static', //放置生成的静态资源
    filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
    productionSourceMap: false, // 打包时不生成.map文件
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/ipApi': {
                target: 'http://pv.sohu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/ipApi': ''
                }
            }
        }
    }
})