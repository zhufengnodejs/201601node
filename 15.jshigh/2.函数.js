/**
 * 对象都是通过函数创建的
 * 函数是对象的一种
 *
 */

var obj = new Object();
var arr = new Array();
console.log(typeof (Object));  // function
console.log(typeof (Array));  // function
//JS提供给我们的语法糖
var obj2 = {};
var arr2 = [,,];
/*function fn(a,b){
    console.log(a+b);
}*/
/**
 * 1.函数名 fn
 * 2. 函数参数
 * 3. 函数体 最后一个参数
 */
var fn = new Function('a','b','console.log(a+b)');
fn(1,3);

