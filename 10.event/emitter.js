var EventEmitter = require('events');
var util = require('util');
function Girl(name){
    this.name = name;
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter);

var girl = new Girl();
function Boy(name){
    this.name = name;
    this.say = function(words){
        console.log(this.name,words);
    }
}
var xiaoming = new Boy('小明');
var xiaohua = new Boy('小花');
//注册监听 事件 订阅
var m = xiaoming.say.bind(xiaoming,'看上就买吧');
girl.addListener('看',m);
//注册监听 事件 订阅
girl.on('看',xiaohua.say.bind(xiaohua,'喜欢就多看看吧'));
//发射事件 发布
girl.emit('看');
//girl.removeListener('看',m);
girl.removeAllListeners('看');
girl.emit('看');
//如果发射多次事件，只会触发一次
girl.once('饿了',function(){
    console.log('吃饭');
});

girl.emit('饿了');
girl.emit('饿了');
girl.emit('饿了');
