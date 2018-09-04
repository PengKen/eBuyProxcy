var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware')

var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/',function (req,res) {
  res.sendFile(__dirname + '/dist/index.html')
})
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Credentials',true);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/api',proxy({
  target:'http://192.168.43.186:8080',
  changeOrigin:true,
  pathRewrite:{
    '^/api/v1':''
  }
}))
//var redis = require('redis');

// 创建客户端；
//client = redis.createClient(6379,'127.0.0.1',{});
//var client = redis.createClient();  //默认使用端口：6379，IP：127.0.0.1

// // 连接提示
// client.on("connect", function(error) {
//   console.log("connect....");
//
// })
// require('./socket/javaSocket')()
// require('./socket/webSocket')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
