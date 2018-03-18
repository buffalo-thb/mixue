var merge = require('webpack-merge')
var prodWebpackConfig = require('./config/webpack.base.config')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(prodWebpackConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})