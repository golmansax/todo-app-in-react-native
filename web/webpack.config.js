/* eslint-disable no-var */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var jeet = require('jeet');
var nib = require('nib');
var stylusTypeUtils = require('stylus-type-utils');

module.exports = {
  context: __dirname,
  entry: './entry.js',

  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?optional[]=runtime'],
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules!stylus-loader?paths=node_modules'
        ),
      },
      {
        test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },

  resolve: {
    moduleDirectories: [path.join(__dirname, '..', 'node_modules')],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],

  stylus: {
    use: [stylusTypeUtils(), jeet(), nib()],
  },
};
