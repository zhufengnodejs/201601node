/**
 * 在下一个事件环中执行此函数
 */
//它每次都比对时间
setTimeout(function(){
    console.log('a');
},0);

//效率高直接执行
//在下一个事件环中执行此函数
setImmediate(function(){
    console.log('b');
});
/**
 *把这个函数放在当前的任务末尾
 */
process.nextTick(function(){
    console.log('c');
});
console.log('d');
console.log('e');