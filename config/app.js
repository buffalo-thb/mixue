var express = require('express');
var path = require('path');
var http = require('http');
var ejs = require('ejs');
var reload = require('reload');
var app = express();
var port = 8080;
var hostDomain = 'localhost';


app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, '../build/html'));
app.set('view engine', 'html');

process.env.NODE_ENV = 'dev';
app.locals.env = process.env.NODE_ENV;
app.locals.reload = false;

var webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.dev.config.js');

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

require('./routes')(app);
// require('./devServerProxy')(app);

var server = http.createServer(app);
reload(server, app);

server.listen(port, function () {
  console.log('本地模拟数据请求方式:' + port);
  console.log('1、在config/routers.js 添加模板请求路径和数据,每次如果服务启动的时候加的数据需要从新npm run dev');
  console.log('2、控制台:npm run dev');
  console.log('3、浏览器打开 http://' + hostDomain + ':' + port + '/');
  console.log('4、点击对应的页面');
});
