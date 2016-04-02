var fs = require('fs');

/*
var filename = fs.readFileSync('1.txt','utf8');
var content = fs.readFileSync(filename,'utf8');
console.log(content);
*/
fs.readFile('1.txt','utf8',function(err,data){
    fs.readFile(data,'utf8',function(err,data){
        console.log(data);
    })
})



