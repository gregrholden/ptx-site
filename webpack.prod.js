const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pentatonix',
      hash: true,
      xhtml: true,
      template: 'src/index.ejs'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images/**/*',
          to: 'images/[name].[ext]'
        }
      ]
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
});