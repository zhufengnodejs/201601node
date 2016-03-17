/**
 * 1. 当函数没有返回值的时候，new的时候返回this
 * 2.当函数有返回值的时候
 * @constructor
 */
function Person(){
    this.name = 'zfpx';
    //console.log(this);
    //当return的是一个非对象类型的话，那么也返回this
    //如果返回的是一个对象类型的话
    //return {age:10};
}
var p = new Person();
console.log(p)

Person.prototype.getName = function(){
    console.log(this.name);
}
p.getName();
