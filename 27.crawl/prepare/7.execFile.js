//child_process.execFile(file, args, options, callback)
// exec
var child_process = require('child_process');
var execFile = child_process.execFile;
console.log(process.execPath);
execFile(process.execPath,['client.js'],function(err,stdout,stderr){
    console.log(stdout);
});