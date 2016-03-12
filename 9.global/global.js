console.log(process.cwd());
process.chdir('txt');
console.log(process.cwd());
var fs = require('fs');
console.log(fs.readFileSync('index.txt','utf8'));
