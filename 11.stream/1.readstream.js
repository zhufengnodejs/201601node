var fs  = require('fs');
//创建可读流
var rs = fs.createReadStream('./index.txt',{
    start:3,
    end:8,
    highWaterMark:4
});

//设置编码
rs.setEncoding('utf8');
//监听data事件，当读到数据的时候会发射data事件
rs.on('data',function(data){
    console.log('得到数据',data);
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