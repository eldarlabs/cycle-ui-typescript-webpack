var webpack = require('webpack');
var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'eval-source-map',
  //Switch loaders to debug mode
  debug: true,

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
      './src/app'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),
    publicPath: '/build/'
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
      { test: /\.ts$/, loaders: ['ts-loader'],
        include: [
          path.join(__dirname, 'src'),
        ],
        exclude: /node_modules/,
      }, {
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
