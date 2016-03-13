var url = require('url');
var querystring = require('querystring');

console.log(url.parse(
    'http://zfpx:123@github.com:80/zhufeng?name=zfpx'));

console.log(querystring.parse('name=zfpx'));