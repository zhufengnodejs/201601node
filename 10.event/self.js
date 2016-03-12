var EventEmitter = require('./EventEmitter');
var util = require('util');
function Girl(name){
    this.name = name;
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter);

var girl = new Girl();
function Boy(name){
    this.name = name;
    this.say = function(thing){
        console.log(thing);
    }
}
var xiaoming = new Boy('小明');
var xiaohua = new Boy('小花');
//注册监听 事件 订阅
girl.addListener('看',xiaoming.say);
//注册监听 事件 订阅
girl.on('看',xiaohua.say);
//发射事件 发布
girl.emit('看','钻石');
girl.removeListener('看',xiaoming.say);
//girl.removeAllListeners('看');
girl.emit('看','项链');
/*//如果发射多次事件，只会触发一次
girl.once('饿了',function(){
    console.log('吃饭');
});*/
/*
girl.emit('饿了');
girl.emit('饿了');
girl.emit('饿了');*/
