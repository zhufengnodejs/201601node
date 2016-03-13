var http = require('http');
var users = [];
/**
 * 1. 客户端把一个用户信息发送给服务器
 * 2. 服务器接收到后追加到users数组中
 * 3. 服务器返回users数组，在客户端那里打印出来
 */
/**
 * req 是一个可读流 ondata on end pipe
 * res 是一个可读可写流 ondta onend pipe write end
 */
http.createServer(function(req,res){
    console.log(req.method);//方法
    console.log(req.headers);//请求头
    console.log(req.httpVersion);//HTTP版本号
    console.log(req.url);//请求的URL
    req.setEncoding('utf8');//设置编码
    var contentType = req.headers['content-type'];
    //每接收到数据都会触发data事件。
    var result = '';
    req.on('data',function(data){
        result+=data;
    })
    req.on('end',function(){
        var user = '';
        if(contentType =='application/json'){
             user = JSON.parse(result);
        } else if(contentType =='application/x-www-form-urlencoded'){
          //name=zfpx&age=6
           user = require('querystring').parse(result);
        }else if(contentType =='application/zfpx'){
            //name@zfpx|age@6
            user = require('querystring').parse(result,'|','@');
        }


        users.push(user);
        res.end(JSON.stringify(users));
        console.log('ccc');
    });

}).listen(8080);
