/**
 * child_process即子进程 可以创建一个系统子进程 并执行shell命令
 *
 **/

var child_process = require('child_process');
var spawn = child_process.spawn;
//执行一个命令，开启一个子进程
var subprocess = spawn(process.execPath, ['client.js']);
//标准输出
subprocess.stdout.on('data',function(data){
    console.log(data.toString());
});
subprocess.on('error',function(error){
    console.error(error);
});
subprocess.on('message',function(){
    console.log(arguments);
});
subprocess.on('exit',function(){
    console.log('活干完了，下班收工了');
});


//主进程 可以继续执行
console.log('continue');