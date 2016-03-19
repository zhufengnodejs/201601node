var express      = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine','ejs');
app.set('views',path.resolve());
app.use(cookieParser());

function checkLogin(req,res,next){
    if(req.cookies && req.cookies.username){
        next();
    }else{
        res.redirect('/');
    }
}

//进入登录页
app.get('/',function(req,res){
 res.render('login',{});
});


// 登录
app.get('/login',function(req,res){
   var username = req.query.username;
   res.cookie('username',username);
    //重定向，让客户端重向新求参数指定的路径
   res.redirect('/user');
});
//用户主页
app.get('/user',checkLogin,function(req,res){
    res.send(req.cookies.username);
});

app.listen(80);