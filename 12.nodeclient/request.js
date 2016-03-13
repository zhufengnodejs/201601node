var bodyParser = require('./bodyParser');
var http = require('http');
/**
 *
 * @param options 访问真正服务器的配置对象
 * @param data 请求体的数据
 * @param callback 取得真正服务器响应后的回调函数
 */
module.exports = function(options,data,callback){
   //向真正的数据服务器发送请求 res代表服务器的响应
    var request = http.request(options,function(res){
        bodyParser(res,function(result){
            callback(result);
        });
    });
    //向服务器发送请求体
    request.end(data);
}