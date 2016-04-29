var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
/*app.use(function(req,res,next){
    fs.createReadStream(__dirname+'/public'+req.url).pipe(res);
});*/
//参数的值是静态文件目录的根目录
app.use(express.static(__dirname+'/public'));

app.listen(8080);