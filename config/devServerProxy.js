/*
 Created by thb
 desc: 后端接口代理设置
 docs:
 https://github.com/chimurai/http-proxy-middleware
 https://webpack.js.org/configuration/dev-server/#devserver
 */

var proxy = require('http-proxy-middleware');

module.exports = function (app) {
  let _proxy = proxy({target: 'http://m.mixue.com', changeOrigin: true});

  // app.use('/index/cms', _proxy);
};
