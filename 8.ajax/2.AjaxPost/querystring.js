var querystring = require('querystring');
var s = 'name=zfpx&age=8';
console.log(querystring.parse(s));
console.log(querystring.stringify(querystring.parse(s)));
//1. 作业1 实现 parse stringify方法