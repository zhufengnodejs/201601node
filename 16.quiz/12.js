/**
 * 如果函数声明有多次，后面的会覆盖前面的定义。
 * 如果表达的话，如果声明多次会忽略 后面的声明
 */
var x = (function (){
    var f = function (){ return 1; }
    return f();
    var f  =function (){ return 2; }
})();

console.log(x);