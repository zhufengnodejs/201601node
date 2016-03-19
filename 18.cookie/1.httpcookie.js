var http = require('http');
http.createServer(function(req,res){
  if(req.url == '/write'){
      //响应头 实体头 扩展头自定义头
      var time = new Date(new Date().getTime() + 10*1000).toGMTString();
      res.writeHead(200,{
          'Set-Cookie':'age=6; path=/; Expires='+time
      });
      res.end('ok');
  }else if(req.url == '/read'){
      console.log(req.headers.cookie);
      //第二次
    res.end('hello');
  }
}).listen(8080);