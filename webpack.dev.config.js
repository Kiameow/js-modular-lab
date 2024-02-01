const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  cache: false,
  devtool: 'inline-source-map',
  devServer: {
    static: '.',
    hot: true,
  },
  output: {
    publicPath: '/dist',
    clean: true,
  },
})

//  optimization: {
//    runtimeChunk: 'single',
//  }, // if you got mutiple entries, you can add this optimization