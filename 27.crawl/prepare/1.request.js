var request = require('request');
var iconv = require('iconv-lite');
request({url:'http://top.baidu.com/category?c=10&fr=topindex',encoding:null},function(err,response,body){
    var result  = iconv.decode(body,'gbk');
    var cheerio = require('cheerio');
    var $ = cheerio.load(result);
    $('.hd .title a').each(function(){
        var $me = $(this);
        console.log($me.text());
    });
})