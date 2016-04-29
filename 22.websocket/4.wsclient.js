var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8080');

//当连接服务器成功之后调用的回调函数
ws.on('open',function(){
    ws.send('你好服务器');
});

//监听服务器发回来的消息
ws.on('message',function(data){
  console.log(data);
});