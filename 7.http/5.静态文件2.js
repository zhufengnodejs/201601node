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
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var server = http.createServer(function(request,response){
    var url = request.url;
    //如果访问收藏图标的话，直接返回404记得加return
    if(url == '/favicon.ico'){
        return response.end('404');
    }
    // 如果访问/,重定向到index.html，也就是默认首页
    if(url == '/'){
        url = '/index.html';
    }
    console.log(url);
    response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');//设置响应头
    //判断文件是否存在，如果存在则读取并返回给客户端
    //如果不存在，则报404 Not Found
    fs.exists('.'+url,function(exists){
        if(exists){
            fs.readFile('.'+url,function(err,data){
                console.error(url,err,data);
                //如果读取文件出错了，则也报404错误
                if(err){
                    response.statusCode = 404;
                    response.end();
                }else{
                    response.statusCode = 200;
                    response.write(data);
                    response.end();
                }

            })
        }else{
            response.statusCode = 404;
            response.end();
        }

    })

});
//在8080端口上进行监听 ，主机名是localhost
// 0 - 65535
// ps -ef | grep node
server.listen(8080,'localhost');