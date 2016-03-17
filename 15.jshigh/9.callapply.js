function say(city,word){
    console.log(this.name,city,word);
}
say('乐乐','你好');
var person = {name:'zfpx'};
// apply第一个参数指定了函数运行时的this对象
say.apply(person,['乐乐','你好']);
say.call(person,'乐乐','你好');

var newSay = say.bind(person,'city');
newSay('word');


