var express = require('express');
var app = express();
var path = require('path');
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});

//先创建一个HTTP服务器
var server = require('http').createServer(app);
//再创建socket.io服务器
var io = require('socket.io')(server);
//监听客户端的连接事件
io.on('connection',function(socket){
  // socket代表与某个客户端的连接对象
  socket.on('message',function(msg){
      socket.send('server:'+msg);
  })
});
//监听端口
server.listen(80);