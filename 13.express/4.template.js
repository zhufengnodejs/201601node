var express = require('express');
var path = require('path');
var app = express();
/**
 * 1. 动态内容 当前时间
 * 2. 静态内容  tmpl.html
 * 3. 动静结合
 */
//配置属性值
//配置模板引擎
// jade ejs
app.set('view engine','ejs');
//指定模板存放的目录
// resolve 先获取当前文件的所在在绝对目录 ，然后再拼上后面的参数
app.set('views',path.resolve('views'));

app.get('/',function(req,res){

    //把模板和数据混合成HTML页面
    res.render('index.ejs',{title:'首页',books:{
        name:'node.js'
    }});
});
app.get('/reg',function(req,res){
    res.render('index',{title:'注册'});
});
app.listen(8080);