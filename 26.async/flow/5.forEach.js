var async = require('async');
var arr = [1,2,3];
//如何串行迭代，并在全部迭代完成后执行回调
console.time('cost');
/*async.eachSeries(arr,function(item,cb){
    setTimeout(function(){
        console.log(item);
        cb();
    },1000);
},function(){
    console.timeEnd('cost');
});*/
//并行迭代
async.forEach(arr,function(item,cb){
    setTimeout(function(){
        console.log(item);
        cb();
    },1000);
},function(){
    console.timeEnd('cost');
})