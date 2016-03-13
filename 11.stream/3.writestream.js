var fs = require('fs');

var ws = fs.createWriteStream('./write.txt',{
});
//写入
ws.write('好','utf8',function(){
    console.log(arguments);
})
ws.write('好','utf8',function(){
    console.log(arguments);
})
//写入并且关闭
ws.end('学习','utf8');
