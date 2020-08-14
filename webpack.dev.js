const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});