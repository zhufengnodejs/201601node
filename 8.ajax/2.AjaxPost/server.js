//引入核心模块
var http = require('http');
//引用URL解析URL参数
var url = require('url');
//读写文件
var fs = require('fs');
var querystring = require('querystring');
//创建http服务器
http.createServer(function(req,res){
    //一定会返回一个对象
    // true的话urlObj的query也会是一个对象，否则就是一个字符串
   // username=zfpx&password=123 -> {username:'zfpx',password:123}
    var urlObj = url.parse(req.url,true);
    //路径名
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.readFile('./index.html','utf8',function(err,data){
                res.end(data);
        })
    }else if(pathname == '/reg'){
        var result='';
        req.on('data',function(data){
            result +=data;
        })
        req.on('end',function(data){
            var obj = querystring.parse(result);
            console.log(obj);
            res.end('ok');
        })
    }


}).listen(8080);