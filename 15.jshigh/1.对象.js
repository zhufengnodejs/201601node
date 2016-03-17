var obj  = {name:'zfpx'};
var obj2 = new Object();

obj2.age = 18;
console.log(obj2);

var arr = [1,2,3];
var arr2 = new Array(3,2);
arr2.age = 5;
console.log(arr2);
//函数声明
function fn(){
 console.log('hello');
}
//函数是对象的一种，函数是一种对象

console.log(fn instanceof Object);
/**
 * 判断变量类型几种方法
 * 1. typeof 基本类型和function
 * 2. instanceof 原型链来判断 判断不同的对象类型
 * 3. toString.call(fn); 判断不同的对象类型
 * 4. 通过这个变量的一些特征来判断
 * 5. 通过constructor来判断
 */
console.log(Object.prototype.toString.call(fn));//[object Function]

console.log(!!fn.bind);
// fn Function
//constructor可以被 修改，所以有可能不准确
Function.prototype.constructor = Object;
console.log(fn.__proto__.constructor == Function);