// File System
var fs = require('fs');
/**
 * 1. 每一个同步方法和异步方法都是成对出现的
 * 2. 同步方法会阻塞主线程的执行，在数据没有返回之间不能执行后续代码
 * 3. 它不需要传递回调函数，通过函数返回值接收结果
 * 4.
 */
 try{
     var data = fs.readFileSync('./index.txt1','utf8');
 }catch(err){
    console.log(err);
 };

console.log(data);
console.log('b');
console.log('c');