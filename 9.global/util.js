var util = require('util');
function Parent(name){
    this.name = 'father';
    this.age = 50;
    this.say = function(){
        console.log(this.name);
    }
}
Parent.prototype.showName = function(){
    console.log('show',this.name);
}
function Child(){
    Parent.call(this);
    this.name = 'child';
}
util.inherits(Child,Parent);
var c = new Child;
console.log(c);
c.showName();

/**
 *将任意一个对象转成字符串
 *
 **/
c.hobby = {
    name:'play',
    price:{
        name:['zfpx',4]
    }
}
console.log(util.inspect(c));


console.log(util.isArray([]));
console.log(util.isRegExp([]));
console.log(util.isDate([]));
console.log(util.isError([]));