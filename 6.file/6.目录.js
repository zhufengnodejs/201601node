/**
 * 操作目录
 */
var fs = require('fs');
// mk dir
//创建目录
//创建目录 的时候要求父目录必须存在
/**
fs.mkdir('test/t1/t2',function(err){
    if(err){
        console.log(err);
        console.log('目录创建失败');
    }else{
        console.log('目录创建成功');
    }
});
**/
//创建文件夹，如果父文件夹不存在的话，则需要自动创建
//作业
function makep(path,callback){
  // 1. 把这个参数转成数组
  // 2. 依次判断各个目录是否存在，如果存在跳过，如果不存在则创建此目录
  // 3. 最后创建一个最终的目录
}

//2.读取目录下面所有的文件
fs.readdir('./book',function(err,files){
    console.log(files);
})

//3.获取一个文件或目录详情
/*fs.readdir('./book',function(err,files){
    //循环文件列表
    files.forEach(function(file){
        //获取文件的详情
        fs.stat('./book/'+file,function(err,state){
            console.log(state.isDirectory());//是否是目录
            console.log(state.isFile());//是否是文件
          console.log(state.size);
        });
    });
})*/

//4.判断一个文件(或文件夹)是否存在
fs.exists('./book',function(exists){
    console.log(exists);
});


