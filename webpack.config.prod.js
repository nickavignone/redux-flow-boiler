const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules']
  },
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, './dist/build'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [

    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      '_': 'lodash'
    }),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Optimize the order that items are bundled. This assures the hash is deterministic.

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].css'),

    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),

    new FlowBabelWebpackPlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        },
        {
          loader: "eslint-loader",
          options: {
            quiet: false,
            failOnError: false,
            failOnWarning: false,
            emitError: false,
            emitWarning: true
          }
        }]
      },
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            {
              loader: 'postcss-loader',
              options: {
                config: {
                   path: path.resolve(__dirname, './postcss.config.js'),
                }
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  }
};

module.exports = config;
