//通过调用new Function来创建一个函数的对象
var Foo = new Function('a','b','return a+b;');
//2.当创建add函数的时候，会自动送一个Add.prototype对象
var o1 = new Object();
//3.创建的对象的__proto__等于构造函数的prototype
console.log(o1.__proto__ === Object.prototype);

/**
 * 1. prototype叫原理 构造函数的属性
 * 2. __proto__叫隐式原型 通过构造函数构造出来的对象的属性
 *
 **/
var f1 = new Foo();
console.log(f1 instanceof Foo);
// 左侧是对象实例 ，右侧是构造 函数
console.log(f1 instanceof Object);