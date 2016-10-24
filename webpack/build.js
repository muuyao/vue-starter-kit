const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-px2rem');
const WebpackUploadPlugin = require('webpack-upload');
const config = require('./config')[process.env.NODE_ENV];

const outputDir = path.join(__dirname, '../public');
const postcss = [
  px2rem({
    remUnit: 75
  }),
  autoprefixer({
    browsers: ['> 5%', 'Android > 4.0']
  })
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: outputDir,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: config.publicPath
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=1!postcss-loader')
    }, {
      test: /\.(png|jp?g|gif|svg)$/i,
      exclude: /node_modules/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }]
  },

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
    },

    postcss
  },

  postcss,

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, './node_modules')],
    alias: {
      src: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components')
    }
  },

  devtool: false,

  node: {
    fs: 'empty'
  },

  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),

    // 公共库会被抽离到vendor.js里
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      filename: '[name].[hash].js'
    }),

    // 版本上线时开启
    new webpack.DefinePlugin({
      // 定义生产环境
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // 比对id的使用频率和分布来得出最短的id分配给使用频率高的模块
    new webpack.optimize.OccurenceOrderPlugin(),

    // 允许错误不打断程序
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunksSortMode: 'dependency'
    }),

    // 静态资源实现cdn上传
    // new WebpackUploadPlugin(config.upload),
  ]
};
