'use strict'
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: !isProduction,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
    // 拆包
    config.optimization.splitChunks({
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 300000, // 依赖包超过300000bit将被单独打包
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `chunk.${packageName.replace('@', '')}`
          },
          priority: 10
        }
      }
    })
  },
  configureWebpack: config => {
    if (isProduction) {
      const plugins = []
      // 配置gzip
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
          threshold: 10240,
          minRatio: 0.8
        }),
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: true // 去掉注释
            },
            warnings: true,
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']// 移除console
            }
          },
          cache: true, // 启用文件缓存
          parallel: true // 使用多进程并行运行来提高构建速度
        })
      )
      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  }
}
