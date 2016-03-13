var fs = require('fs');
function copy(src,target){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    //对文件写和读的时候
    //要先打开文件，然后读写文件，然后关闭文件
    rs.pipe(ws,{end:true});

}
function pipe(source,dest){
    //先监听可流的data事件，
    source.on('data', function(chunk) {
        //写成功就是true,写失败就是false
        if(false === dest.write(chunk)){
            //停止触发data事件
            source.pause();
        }
    });

    //当全部咽下之后，调用回调函数
    dest.on('drain', function(){
        //重新开始触发data事件
        source.resume();
    });

}
copy('./index.txt','./write.txt');