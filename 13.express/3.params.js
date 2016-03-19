var express = require('express');
//获取配置对象
var app = express();
// localhost:8080/hello?name=zfpx
app.get('/hello',function(req,res){
    //var urlObj = url.parse(req.url,true);

    console.log(req.host);//主机名
    console.log(req.path);// 路径 urlObj.pathname
    console.log(req.query);// urlObj.query
    res.send('欢迎来到首页');
});
//路径参数 把向服务器端传递的参数放在路径里
app.get('/user/:id/:age',function(req,res){
    console.log(req.params.id);
    console.log(req.params.age);
    console.log(req.host);
    console.log(req.path);
    console.log(req.query);
    res.send('欢迎来到user');
});

app.listen(8080);