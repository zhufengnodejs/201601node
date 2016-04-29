/**
 * 承诺 promise
 * 1. 后面的then注册的函数会覆盖前面注册的
 * 2. 如果resolve之后再注册then,则得不到值
 **/

//这件事情是一个需要延迟处理的事情
var Defer = function(){
    var status = 'pending';//初始态
    var value;//异步操作的最终的值
    var callbacks = [];//异步操作成功后的回调
    var reject_cb = [];
    var reject_val;
    return {
        //当调用resolve的时候就表示成功了
        //异步操作完成之后调用，表示操作成功了
        resolve:function(_value){
            value = _value;
            status = 'resolve';
            callbacks.forEach(function(callback){
                callback(value);
            });
            callbacks = undefined;
        },
        reject:function(_value){
            reject_val = _value;
            status = 'reject';
            reject_cb.forEach(function(callback){
                callback(reject_val);
            });
            reject_cb = undefined;
        },
        //就是承诺的对象,它会返回给客户端
        promise:{
            then:function(_callback_){
                if(callbacks){
                    callbacks.push(_callback_);
                }else{
                    _callback_(value);
                }
            },
            catch:function(_callback_){
                if(reject_cb){
                    reject_cb.push(_callback_);
                }else{
                    _callback_(value);
                }
            }
        }
    }
};

var defer = Defer();
var fs = require('fs');
fs.readFile('111.txt','utf8',function(err,data){
    defer.resolve(data);//读取文件完成后调用resolve把状态改为成功
    defer.reject(err);
});
fs.readFile('22.txt','utf8',function(err,data){
});
var promise = defer.promise;
//defer给你一个承诺，当异步操作完成之后我会调用你传给我回调函数
promise.then(function(data){
    console.log(1,data);
});
//当出错的时候进行的回调
promise.catch(function(err){
    console.log(1,err);
});
promise.catch(function(err){
    console.log(2,err);
});