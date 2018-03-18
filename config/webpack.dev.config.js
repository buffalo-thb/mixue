var path = require('path');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var BaseConfig = require('./webpack.base.config');

module.exports = function (env) {
  return Merge(BaseConfig, {
    output: {
      publicPath: '/build',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('dev'),
        }
      })
    ],
  })
}();
