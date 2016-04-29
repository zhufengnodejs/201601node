var foo = {
    bar: function () {
        return this.baz;
    },
    baz: 1
};
var s  = (function () {
    var obj = arguments[0];
    return typeof obj();
})(foo.bar);

console.log(s);//undefined

//当从一个对象上取出一个函数属性并执行的时候，函数里的this指向当前对象
var arguments ={
    'fn':function(){console.log(this);}//arguments
}
arguments['fn']();