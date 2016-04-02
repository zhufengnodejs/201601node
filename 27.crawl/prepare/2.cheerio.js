var cheerio = require('cheerio');
var $ = cheerio.load('<h1 class="title"> Hello zfpx</h1>');
$('h1.title').text('hello node.js');
$('h1.title').addClass('welcome');
console.log($.html());//转成html字符串