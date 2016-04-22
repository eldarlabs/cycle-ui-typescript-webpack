var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

// Primary app
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  watchOptions: {
    aggregateTimeout: 1500,
  },
  inline: true,
  historyApiFallback: true,
  stats: {colors: true}
})
.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
