var async = require('async');
async.auto({
    //定义依赖关系，mix和面依赖水和面粉的任务完成
    mix: ['water', 'flour', function (results, cb) {
        setTimeout(function () {
            cb(null, results.water + '+' + results.flour);
        }, 3000);

    }],
    steam: [function (results, cb) {
        setTimeout(function () {
            cb(null,  '蒸');
        }, 4000);
    }],
    water: function (cb) {
        console.time('cost');
        setTimeout(function () {
            cb(null, '水');
        }, 1000)

    },
    flour: function (cb) {
        setTimeout(function () {
            cb(null, '面粉');
        }, 2000);

    }
}, function (err, result) {
    console.timeEnd('cost');
    console.log(result);
});