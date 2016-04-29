var foo = {
    bar: function(){ return this.baz; },
    baz: 1
}

///运算符
var s  = typeof (f = foo.bar)();
console.log(s);

var i=0;

//逗号隔开的多个表达式，然后这些表达从左往右依次执行，返回最后一个表达式的值
var j = (i++,i++,i++)
console.log(j);
console.log(i);

var f = (function f(){ return "1"; }, function g(){ return 2; })();
console.log(typeof f);


var s = function xx(){

}

console.log(s == xx);

function xx(){

}
for(var i=0;i<10;i++){

}