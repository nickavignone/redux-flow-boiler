// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
//import HtmlWebpackPlugin from 'html-webpack-plugin';
const autoprefixer = require('autoprefixer');
const path = require('path');
//Global Samsung Mixins/Vars

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

const config = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['src', 'node_modules'],
    modules: ['src', 'node_modules']
  },
  debug: true,
  devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, '../dist/test'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [

    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      '_': 'lodash'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: false
    }),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Optimize the order that items are bundled. This assures the hash is deterministic.
    new webpack.optimize.OccurenceOrderPlugin(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].css'),

    new FlowBabelWebpackPlugin(),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url?name=[name].[ext]'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]'},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')},
      {test: /\.json$/, loader: "json"}
    ]
  },
  postcss: ()=> [autoprefixer]
};

module.exports = config;
