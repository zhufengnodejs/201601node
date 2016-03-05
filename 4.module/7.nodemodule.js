// file system
//加载FS核心模块 NODE自带的亲生的模块
var fs = require('fs');
fs.readFile('./index.txt');

//文件模块 就是我们自己写的模块文件模块
require('./math.js');

//别人给你生的，第三者生的，第三方模块
var mime = require('mime');
console.log(mime);