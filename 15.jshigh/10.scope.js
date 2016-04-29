function one(){
    var a = Math.random();
    return function(){
        return a;
    }
}
var s = one();
var s2 = one();
console.log(s(),s2());
///没有块级作用域，
var a = 100;
if(true){
    'use strict'
    var a = 100;
}
console.log(a);


for(var i=0;i<10;i++){

}
console.log(i);