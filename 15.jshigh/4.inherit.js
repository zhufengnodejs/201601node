var Person = function(){
    //仅有的放在里面
    this.name = 'zfpx';
    this.age = 100;
}
//公用的放在外面
Person.prototype.getName = function(){
    console.log(this.name);
}

var p = new Person();
//找属性的时候是沿着__proto__这条线来找的
p.getName();
console.log(p.hasOwnProperty('name'));//true
console.log(p.hasOwnProperty('getName'));//false
