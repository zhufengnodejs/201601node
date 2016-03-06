/**
 *
 */
var fs = require('fs');
//处理路径
var path = require('path');
//合并 连接路径
console.log(path.join('book','mysql.json'));
//seperator 分隔符
console.log(path.sep);

console.log(__filename);//获取当前模块的绝地路径
console.log(__dirname);//获取 当前模块所在的绝对目录
//获取一个路径里文件的名
console.log(path.basename('7.path.js','.js'));
//获取一个路径里文件的扩展名
console.log(path.extname('7.path.js'));
//从一个相对路径解析出一个绝对路径
//以应用程序的所在目录为根起
console.log(path.resolve('book','node.json','..','mysql.json'));
