const { default: merge } = require('webpack-merge')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './public',
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: true
  }
})