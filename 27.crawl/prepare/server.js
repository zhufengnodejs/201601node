var http = require('http');
http.createServer(function(req,res){
   setTimeout(function(){ res.end('hello');},10000);

}).listen(8080);