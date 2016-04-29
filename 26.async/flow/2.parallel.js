/**
 * 串行执行异步任务
 **/
var async = require('async');
async.parallel([
    function (cb) {
        setTimeout(function () {
            console.log('看电视');
            cb(null,'看电视');
        }, 3000);
    },
    function (cb) {
        setTimeout(function () {
            console.log('做作业');
            cb(null,'做作业');
        }, 2000);
    }
], function (err, result) {
    console.error(err);
    console.log(result);
})