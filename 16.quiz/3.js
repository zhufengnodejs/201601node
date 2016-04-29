/**
 * 函数执行上下文环境
 *  this
 *  作用域链 找自由变量(没有在当前作用下声明的变量)
 *  VO(活动对象) 先用arguments初始化
 *    {
 *       x:1
 *    }
 */

var s = (function(x){
    'use strict'
    // length
    console.log(arguments);
    //这个X是从函数执行上下文环境 中的VO里取值的
    arguments[0] = 100;
    //如果是参数的话，是不可能删除掉，因为它是不可配置的
    //delete x;
    return arguments[0];
})(1);

console.log(s);

var obj = {};
Object.defineProperty(obj,'name',{
   value:'zfpx',//它的值
    writable:false,//是否只读，是否修改
    enumerable:false,//是否可枚举
    configurable:false //是否可以配置 是否可以删除此属性
})
console.log(obj.name);
obj.name = '2';
console.log(obj.name);
for(var attr in obj){
    console.log(attr);
}
with(obj){
    delete name;
    console.log(name);
}
