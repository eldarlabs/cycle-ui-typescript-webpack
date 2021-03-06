'use strict';

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().merge({
  context: __dirname,

  entry: {
    app: [
      './src/app'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.scss', '.json'],
    modulesDirectories: ['src', 'node_modules'],
    fallback: path.join(__dirname, "node_modules")
  },

  resolveLoader: {
      packageMains: ['json-loader'],
      fallback: path.join(__dirname, "node_modules")
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
      }
    ]
  },
  toolbox: {
    theme: path.join(__dirname, 'src/theme.scss')
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('root.css', { allChunks: true }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.ejs',
    })
  ]
});
