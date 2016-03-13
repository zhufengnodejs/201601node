var fs  = require('fs');
//创建可读流
var rs = fs.createReadStream('./index.txt',{
    start:3,
    end:8,
    highWaterMark:2
});

//设置编码
rs.setEncoding('utf8');
//监听data事件，当读到数据的时候会发射data事件
// pause 停止喂
// resume 恢复接着喂
rs.on('data',function(data){
    //吃一口先要求暂停
    rs.pause();
   setTimeout(function(){
        console.log(data);
       //要求接着喂
       rs.resume();
   },1000)
})
//从文件中读取完毕之后会触发end事件
rs.on('end',function(){
    console.log('end');
})
//当读取文件出错的时候会触发error事件
rs.on('error',function(err){
    console.error(err);
})
/**
 * 1. 同步方法 try catch
 * 2.异步 判断回调函数里的error对象是否有值
 * 3. 在流里判断错误，监听 它的 error事件
 **/