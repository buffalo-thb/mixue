var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.set('jsonp callback name', 'jsoncallback');

  //S= 模块路由
  app.get('/demo', function (req, res) {
    res.render('demo');
  });
  app.get('/', function (req, res) {
    res.render('index');
  });
  app.get('/index', function (req, res) {
    res.render('index');
  });
  //E= 模块路由

  //S= API 方法
  app.get('/api_get_test', function (req, res) {
    var query = req.query;
    var body = req.body;
    console.log("api_get_test query=", query, "body=", body);
    var result = {
      code: 0,
      message: "api_get_test message",
      data: {},
    };
    res.json(result);
  });

  app.post('/api_post_test', function (req, res) {
    var query = req.query;
    var body = req.body;
    console.log("api_post_test query=", query, "body=", body);
    var result = {
      code: 0,
      message: "api_post_test message",
      data: {},
    };
    res.json(result);
  });

  app.get('/api_jsonp_test', function (req, res) {
    var query = req.query;
    var body = req.body;
    console.log("api_jsonp_test query=", query, "body=", body);
    var result = {
      code: 0,
      message: "api_jsonp_test message",
      data: {},
    };
    res.jsonp(result);
  });
  //E= API 方法
};
