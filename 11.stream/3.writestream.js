var fs = require('fs');

var ws = fs.createWriteStream('./write.txt',{
});
//写入
ws.write('好','utf8',function(err){
    console.log(1,arguments);
})
ws.write('好','utf8',function(err){
    console.log(2,arguments);
})
ws.write('好','utf8',function(err){
    console.log(3,arguments);
})
//写入并且关闭
ws.end('学习','utf8');
