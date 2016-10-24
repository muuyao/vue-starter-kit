const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-px2rem');

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
    vendor: ['vue']
  },
  output: {
    path: outputDir,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?sourceMap!postcss-loader'
      },
      {
        test: /\.(png|jp?g|gif|svg)$/i,
        exclude: /node_modules/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader?sourceMap'
    },

    postcss
  },

  postcss,

  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      src: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components')
    }
  },

  devtool: 'source-map',

  debug: true,

  devServer: {
    historyApiFallback: true
  },

  plugins: [

    // 公共库会被抽离到vendor.js里
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      filename: '[name].[hash].js'
    }),

    // 允许错误不打断程序
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};
