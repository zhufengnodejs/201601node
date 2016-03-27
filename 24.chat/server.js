var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});

//先创建一个HTTP服务器
var server = require('http').createServer(app);
//再创建socket.io服务器
var io = require('socket.io')(server);
var clients = {};
//监听客户端的连接事件
// socket代表与某个客户端的连接对象
io.on('connection',function(socket){
 var username;
 socket.send({user:'系统',content:'请输入用户名'});

  //监听 客户端的消息
  socket.on('message',function(msg){
      var result = msg.match(/^@(.+)\s(.+)$/);
      if(result){
          var toUser = result[1];
          var content = result[2];
          if(clients[toUser]){//通过用户名把对应的socket取出来
              clients[toUser].send({user:username,content:'[私聊]'+content});
          }else{
              socket.send({user:'系统',content:'你想私聊的人不在线'});
          }
      }else{
          if(username){
              //把客户端发过来的消息广播给所有的客户端
              for(var s in clients){
                  clients[s].send({user:username,content:msg});
              }
          }else{
              username = msg;
              //属性名是用户名，值为对应的socket对象
              clients[username] = socket;
              socket.send({user:'系统',content:'你的用户名已经修改为'+username});
          }
      }
  })
});
//监听端口
server.listen(80);