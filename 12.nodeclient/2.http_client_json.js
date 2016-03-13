var http = require('http');
//指定请求的参数
var options = {
    host:'localhost',
    port:8080,
    path:'/post',
    method:'POST',
    //headers:{'Content-Type':'application/json'}
    //headers:{'Content-Type':'application/x-www-form-urlencoded'}
    headers:{'Content-Type':'application/zfpx'}
}
//向服务器发送请求
var request = http.request(options,function(res){
     console.log(res.statusCode);//读取响应
     console.log(res.headers);//读取响应头
    var result = '';
    res.on('data',function(data){
        result+=data;
    })
    res.on('end',function(){
        var users = JSON.parse(result);
        console.log(users);
    });
})
//request也是一个流，是一个可写流
/*request.write('{"name":"zfpx"');
request.write(',"age":6}');*/
//request.write('name=zfpx&age=6');
request.write('name@zfpx|age@6');
request.end();//当调用end方法的时候请求才会真正发出