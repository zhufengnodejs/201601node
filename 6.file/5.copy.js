/**
 * 1. 把src里的文件内容，写入到target文件里
 * 2.写入时要先清空再写入
 */

'use strict'

var fs = require('fs');

function copy(src,target){
    fs.readFile(src,function (err,data) {
        fs.writeFile(target,data,function(err){
            console.log("copy success from " + src + "to " + target);
        }) ;
    });
}
copy("./atm.jpg",'./atm2.jpg');

copy('./name.txt','./name.bak.txt');