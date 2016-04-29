//导入核心模块http
var http = require('http');
/**
 * 1. 能在特定的IP 特定端口上监听 客户端的请求
 * 2. 当请求到来的时候能执行监听函数，并返回响应
 *
 * 创建一个服务器
 * 指定监听函数 每当有客户端请求到来的时候执行的函数
 * request 代表客户端的请求，可以从中获取请求过来的信息
 * response 代表向客户端发的响应，可以通过它向客户端发响应
 *
 */
var server = http.createServer(function(request,response){
    console.log(request.method);//请求的方法
    console.log(request.url);//请求的URL
    console.log(request.headers);//请求的头
// Can't set headers after they are sent.at ServerResponse.OutgoingMessage.setHea
//在响应头发出以后不能再发送响应头
    response.statusCode = 404;//调响应码
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应头
    response.write('hello');//写的响应体,在调用第一次write的时候，会发送响应头和第一个write的内容
    setTimeout(function(){
        response.write('world');
        response.end('over');
    },2000)


});
//在8080端口上进行监听 ，主机名是localhost
// 0 - 65535
// ps -ef | grep node
server.listen(8080,'localhost');