//new的时候，如果没有返回值 或返回基本类型，返回 this
// 如果返回一个引用类型，
function f() {
    return f;
}
new f() instanceof f;
/**
 * 1. instanceof
 * 运算符左边是实例 ，沿着__proto__
 * 右边的是构造函数，找到它的prototype
 */
console.log(new f() instanceof Function);



with (function(x){}){ length};

//2