//加载express
var express = require('express');
//获取配置对象
var app = express();
//计算一个处理请求一共花了多少时间
/**
 * 开始时间
 */
app.use(function(req,res,next){
   res.start  = Date.now();
    //console.time('cost');
    //暂存原来的end方法
   var originalEnd = res.end;
    //为res.end重新赋值为我们自定义函数
    res.end = function(){
        //先把原来的end方法调用一次
        originalEnd.apply(res,Array.prototype.slice.call(arguments));
        //加入自己的小逻辑
        console.timeEnd('cost')
       // console.log('timecost',Date.now() - res.start);
    }
    next();
});
//中央
app.use('/money',function(req,res,next){
    res.mny = 100;
    next();
});

//省里
app.use('/hello',function(req,res,next){
    res.mny = res.mny - 10;
    next();
});

//市里
app.use('/money',function(req,res,next){
    res.mny = res.mny - 30;
    next();
});
//村
app.use(function(req,res,next){
    res.mny = res.mny - 60;
    res.send(404);
});

//发送补贴100
app.get('/money',function(req,res){
    res.send(""+res.mny);
});

app.listen(8080);