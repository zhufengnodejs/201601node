/**
 * 全局代码执行时会产生一个执行上下文环境对象
 *
 * @type {number}
 */
/*{
    this:"上下文对象",

    a: var变量 预解释，但不赋值
    hello:函数表达式
    say:函数声明 预解释，并且赋值

    alert
    Math
}*/
var a = 10;
say();
// 函数声明会预解释，会提取到最前面执行
function say(){}
//函数表达式，var会提前声明，但是不会赋值
var hello = function(){}
console.log(this.a);
console.log(a);
say();

(function(){

})()