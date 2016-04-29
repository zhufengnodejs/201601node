/**
 * 1.安装
 * 2.使用
 */
//加载express
var express = require('express');
//获取配置对象
var app = express();
//配置路由
//当用户访问/的时候，会执行后面的回调函数
app.get('/hello',function(req,res){
    //send它可以自动判断参数类型,自动转换响应信息
    //并且自动设置Content-Type
    res.end('get hello');
});
app.post('/hello',function(req,res){
    //send它可以自动判断参数类型,自动转换响应信息
    //并且自动设置Content-Type
    res.send('post hello');
});
app.all('/hello',function(req,res){
    //send它可以自动判断参数类型,自动转换响应信息
    //并且自动设置Content-Type
    res.send('all hello');
});
//启动服务器
app.listen(3000);

