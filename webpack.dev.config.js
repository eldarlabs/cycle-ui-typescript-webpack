'use strict';

var webpack = require('webpack'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./webpack.base.config.js').merge({
  devtool: 'eval-source-map',

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
