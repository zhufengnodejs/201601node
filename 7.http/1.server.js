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
 //write 和end 的参数只能是Buffer或字符串，不能是其它类型
  response.end(new Buffer("q"));//可以再说一句话
 // response.end();//说完了，挂掉电话,end之后就不能再wirte了
});
//在8080端口上进行监听 ，主机名是localhost
server.listen(80,'localhost');