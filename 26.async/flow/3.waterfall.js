/**
 * 串行执行异步任务
 **/
var async = require('async');
/*
  跟串行很像，但是waterfall每个函数的产生的返回值都作为参数传递给第二个函数
 */
async.waterfall([
    function (cb) {
        setTimeout(function () {
            cb(null,'看电视');
        }, 3000);
    },
    function (data,cb) {
        setTimeout(function () {
            cb(null,data+'->做作业');
        }, 2000);
    },
    function (data,cb) {
        setTimeout(function () {
            cb(null,data+'->睡觉');
        }, 2000);
    }
], function (err, result) {
    console.error(err);
    console.log(result);
})