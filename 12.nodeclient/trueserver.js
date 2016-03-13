var http = require('http');
var fs = require('fs');
var users = [];
var server = http.createServer(function (req, res) {
    var result = '';
    req.on('data',function(data){
        result+=data;
    })
    req.on('end',function(data){
        users.push(JSON.parse(result));
        //设置响应头，允许哪个来源来访问我这个服务器
        res.end(JSON.stringify(users));
    })

}).listen(8080);
