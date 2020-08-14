const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Using Dart Sass:
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              }
            }
          }
        ]
      }
    ]
  },
  cache: false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserJSPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /(node_modules|bower_components)/,
        terserOptions: {
          ie8: true,
          safari10: true
        }
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true }}]
        }
      })
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};