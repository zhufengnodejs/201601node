var express = require('express');
var app = express();
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
//extended 为true时，用querystring,如果为false会用bodyParser自己的转换方法
// 如果请求头里的content-type是application/x-www-form-urlencoded, 会用此中间件转成对象放到req.body上，否则 什么都不错
app.use(bodyParser.urlencoded({extended:true}));//此中间件会把请求体提取出来放到req.body上
//如果请求头里的content-type是application/json的时候，, 会用此中间件转成对象放到req.body上，否则 什么都不错
//app.use(bodyParser.json());
app.post('/reg',function(req,res){
    //把请求体里的数据转变成对象放在req.body上
    console.log(req.body);
    res.end('reg');
});
app.listen(8080);