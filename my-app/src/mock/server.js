// var express = require("express")
 
// var app = express();
 
// app.get('/', function(req, res) {
//    res.send('hello world'); 
// });

// app.listen(3001)


const express = require("express");
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware')
const app = express();
// const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(
//   proxy.createProxyMiddleware('/api', {  //`api`是需要转发的请求 
//     target: 'http://localhost:3002',  // 这里是接口服务器地址
//     changeOrigin: true,
//     // pathRewrite: {'/api': ''}
//   })
// )



 // 允许跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  // 此处根据前端请求携带的请求头进行配置 
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  // 例如： 我们公司的请求头需要携带Authorization和Client-Type，此处就应该按照以下进行配置
  // res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type");
  next();
})

// // 解决跨域 https://blog.csdn.net/rainbow8300/article/details/94586642
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// })

var router = express.Router();
 
router.use("/test",require('./test'));

app.use("/api",router)

app.post('/post', function(req, res) {
    // console.log(req.query);
    console.log(req.body);
    res.send('hello world');
});
 
 
app.listen(3002)
