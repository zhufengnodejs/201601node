var express = require('express');
var app = express();
app.use(require('cookie-parser')());
//放在服务器端的客户明细表
var session = {};
app.get('/', function (req, res) {
    //取出cookie中的sid
  var sid = req.cookies.sid;
    //如果有值的话就表示访问过了
    if(sid){
        //从服务器的session对象中取出当前客户端在服务器对应的session
        var currentSession = session[sid];
        //赋值
        currentSession.mny = currentSession.mny-10;
        res.send(''+currentSession.mny);
    }else{
        //生成新的sid
        var newSid = Date.now()+''+Math.random();
        session[newSid] = {mny:100};
        //写入到客户端
        res.setHeader('Set-Cookie','sid='+newSid);
        res.send('新朋友');
    }
});
app.listen(80);