var express = require('express');
var app = express();
//存放所有的用户
var users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];

//1.获取所有的用户
app.get('/users',function(req,res){
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    var accept = req.headers['accept'];
    var acceptType = accept.split(',').map(function(item){
        var values =  item.split(';');
        return {
          type:values[0],//需要的文件类型
          q:values[1]?values[1].split('=')[1]:1 //权重 默认是1
        }
    }).sort(function(a,b){
        return b.q - a.q;
    })[0];
    res.send(users);
});










app.listen(8080);