//引入核心模块
var http = require('http');
//引用URL解析URL参数
var url = require('url');
//创建http服务器
//只有当提交form表单，并且是GET请求的时候，浏览器才会把表单进行序列化拼到URL后面
http.createServer(function(req,res){
    //一定会返回一个对象
    // true的话urlObj的query也会是一个对象，否则就是一个字符串
   // username=zfpx&password=123 -> {username:'zfpx',password:123}
    var urlObj = url.parse(req.url,true);
    var query = urlObj.query;
    //路径名
    var pathname = urlObj.pathname;
   if(pathname == '/books'){
       res.end(query.callback+'(["'+query.name+'"])');
   }


}).listen(8080);