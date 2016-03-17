console.log('b1');
//在requirea的时候返回一个临时的引用，未初始化完成的对象
var a = require('./a');
console.log(a);
console.log('b2');