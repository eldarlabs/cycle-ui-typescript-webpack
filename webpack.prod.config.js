'use strict';

var webpack = require('webpack'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./webpack.base.config.js').merge({
  devtool: 'source-map',

  plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          output: {
              comments: false
          },
          compress: {
              warnings: false
          }
      })
  ]
});
