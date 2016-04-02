/**
 * 承诺 promise
 *
 **/

//这件事情是一个需要延迟处理的事情
var Defer = function(){
  var status = 'pending';//初始态
  var value;//异步操作的最终的值
  var callback;//异步操作成功后的回调
  return {
      //当调用resolve的时候就表示成功了
      //异步操作完成之后调用，表示操作成功了
      resolve:function(_value){
          value = _value;
          status = 'resolve';
          callback(value);
      },
      //就是承诺的对象,它会返回给客户端
      promise:{
          then:function(_callback_){
              callback = _callback_;
          }
      }
  }
}

var defer = Defer();
var fs = require('fs');
fs.readFile('1.txt','utf8',function(err,data){
    defer.resolve(data);//读取文件完成后调用resolve把状态改为成功
})
fs.readFile('1.txt','utf8',function(err,data){
    
})
var promise = defer.promise;
//defer给你一个承诺，当异步操作完成之后我会调用你传给我回调函数
promise.then(function(data){
    console.log(data);
});



