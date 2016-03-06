var fs = require('fs');
/*
var name  = fs.readFileSync('./name.txt','utf8');
var age  = fs.readFileSync('./age.txt','utf8');
console.log(name,age);
*/
//1.回调函数嵌套实现多个异步操作完成之后执行的回调
//1. 需要的时间长，m+n
//2. 代码可读性非常差
/*
fs.readFile('./name.txt','utf8',function(err,name){
    fs.readFile('./age.txt','utf8',function(err,age){
        console.log(name,age);
    });
});
*/

//计数器
var person = {};
var count = 0;
function show(){
  if(Object.keys(person).length==2){
      console.log(person);
  }
}
fs.readFile('./name.txt','utf8',function(err,name){
    person.name = name;
    show();
});

fs.readFile('./age.txt','utf8',function(err,age){
    person.age = age;
    show();
});


//promise


