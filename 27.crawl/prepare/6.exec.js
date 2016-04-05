/**
 * child_process即子进程 可以创建一个系统子进程 并执行shell命令
 *
 **/

var child_process = require('child_process');
var exec = child_process.exec;
//执行一个命令，开启一个子进程
var subprocess = exec('curl http://localhost:8080',function(err,stdout,stderr){
    console.log(stdout);
});

//主进程 可以继续执行
console.log('continue');
