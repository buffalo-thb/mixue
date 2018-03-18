const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: path.resolve(__dirname, '../src'),
        /*低版本的less-loader(<=v2.2.3)才支持这种语法,升级最新版的less-loader不支持，属性中已移除lessLoader、lessPlugin选项*/
        lessLoader: {
          lessPlugins: [
            {
              install: function (less) {
                less
                  .functions
                  .functionRegistry
                  .add('px2rem', function (px, size) {
                    var size = (size && size.value || 750) / 10;
                    return new (less.tree.Anonymous)(px.value / size + 'rem');
                  });
              }
            }
          ]
        }
      }
    }),
    new webpack.ProvidePlugin({Vue: "vue"}),
    new webpack
      .optimize
      .CommonsChunkPlugin({names: ['vendor']}),
    /*new webpack.optimize.CommonsChunkPlugin({
     name: "vendor",
     minChunks: function (module) {
     return module.context && module.context.indexOf("node_modules") !== -1;
     }
     }),
     new webpack.optimize.CommonsChunkPlugin({
     name: "vue",
     minChunks: function (module) {
     return module.context && module.context.indexOf("vue") !== -1;
     }
     }),*/
    new HtmlWebpackPlugin({
      title: 'demo',
      hash: false,
      inject: true,
      filename: './html/demo.html',
      template: path.resolve(__dirname, '../src/templates/demo.html'),
      chunks: [
        'vendor', 'demo'
      ],
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      },
      chunksSortMode: 'dependency'
    }),
    
  ],
  entry: {
    'vendor': [
      'vue', path.resolve(__dirname, '../src/plugins/vue.ext.js'),
      path.resolve(__dirname, '../src/assets/base.less')
    ],
    'demo': path.resolve(__dirname, '../src/views/demo/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/build',
    filename: 'js/[name].js',
    chunkFilename: "js/[name].chunk.js"
  },
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, '../node_modules') + '/vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    noParse: function (content) {
      return /Zepto|zepto|WBAPP/.test(content);
    },
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'less-loader'
            }
          ]
        })
      }, {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: true
          }
        }
      }, {
        test: /\.js$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5120,
          name: 'img/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
};
