var EventEmiiter = require('events');
var e = new EventEmiiter();
e.once()
EventEmitter.prototype.once = function once(type, listener) {;
    //是否已经触发过
//    var fired = false;
    //声明了一个新的函数
    function g() {
        //移除监听
        this.removeListener(type, g);
/*        //如果没有触发过的话
        if (!fired) {
            fired = true;//状态改为已触发
            //调用一下原始的监听函数*/
            listener.apply(this, arguments);
 //       }
    }

    //其实绑定的是此函数内部声明的一个函数
    this.on(type, g);
};

EventEmitter.prototype.once = function once(type, listener) {;
    function g() {
        this.removeListener(type, g);
        listener.apply(this, arguments);
    }
    this.on(type, g);
};
