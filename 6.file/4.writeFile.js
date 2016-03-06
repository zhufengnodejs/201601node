var fs = require('fs');
/**
 * 1. 回调里面的 err data 是由fs.readFile决定的。
 * 2.
 */
//以同步的方式向硬盘的文件里写数据
//fs.writeFileSync('./write.txt', '珠峰培训');

/**
 * 异步操作
 * flag 是表示要对此文件做何种类型的操作
 *   w 清空并写入
 *   a 在原有基础上追加
 */
/*fs.writeFile('./write.txt','node读写',{flag:'a'},function(err){
    if(err){
        console.log(err);
    }
})*/

fs.appendFile('./write.txt','node');
