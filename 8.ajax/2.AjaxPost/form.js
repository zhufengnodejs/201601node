//引入核心模块
var http = require('http');
//引用URL解析URL参数
var url = require('url');
//读写文件
var fs = require('fs');
var formidable = require('formidable');
var querystring = require('querystring');
var util  = require('util');
var mime  = require('mime');
//创建http服务器
//只有当提交form表单，并且是GET请求的时候，浏览器才会把表单进行序列化拼到URL后面
http.createServer(function(req,res){
    //一定会返回一个对象
    // true的话urlObj的query也会是一个对象，否则就是一个字符串
   // username=zfpx&password=123 -> {username:'zfpx',password:123}
    var urlObj = url.parse(req.url,true);
    //路径名
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        //读取文件的内容
        fs.readFile('./html/form.html','utf8',function(err,data){
                res.end(data);
        })
    }else if(pathname == '/reg'){
        var result='';
        //当读到客户端提交过来的数据时会触发data事件，然后调用回调函数
        req.on('data',function(data){
            result +=data;
        })
        req.on('end',function(){
            //取出请求体的内容类型
            var contentType = req.headers['content-type'];
            //如果请求体发过来的是序列化表单
            if(contentType =='application/x-www-form-urlencoded'){
                //把查询字符串转成对象
                var obj = querystring.parse(result);
                console.log(obj);
            }else if(contentType == 'application/json'){
                var obj  = JSON.parse(result);
                console.log(obj);
            }

            //发送响应
            res.end('ok');
        })
    }else if(pathname == '/reg2'){
        // 构建一个解析器
        var formParser = new formidable.IncomingForm();
       ///用解析器解析请求体
        //把非file的input放在fields里
        //把文件类型的元素放在files里
        formParser.parse(req, function(err, fields, files) {
           fs.readFile(files.avatar.path,function(err,data){
               console.log(files.avatar);
               var filename = '/imgs/'+files.avatar.name;
               fs.writeFile('.'+filename,data,function(err){
                   res.writeHead(200,{'Content-Type':'text/plain'});
                   res.end(filename);
               })
           })
        });
    }else{
        /**
         *  . 当前目录
         *  ./index.js 当前目录下的某个文件
         *  / 1. 如果是在HTML的链接里，代表URL 根目录
         *    2. 如果出现在读文件的时候,则它代理当前盘符的根目录
         *  index.js 代表当前目录下面的index.js文件 = ./index.js
         *  .. 代表上一级目录
         *  ../../ 代表爷爷目录
         */
        //   /js/index.js
        fs.exists('/index.js',function(exists){
            if(exists){
                //从文件名中获取文件的Content-Type
                res.setHeader('Content-Type',mime.lookup(pathname));
                fs.readFile('.'+pathname,function(err,data){
                    res.end(data);
                })
            }else{
                res.statusCode = 404;
                res.end(JSON.stringify({name:'zfpx'}));
            }
        })
    }


}).listen(8080);