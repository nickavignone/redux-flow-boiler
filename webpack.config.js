const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const webpack = require("webpack");
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules']
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, "target"),
    publicPath: '/',
    filename: "js/[name].js"
  },
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    contentBase: "./dist",
    stats: {
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: true,
      warnings: true,
      publicPath: false
    }
  },
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new FlowBabelWebpackPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      '_': 'lodash'
    })
  ]
};