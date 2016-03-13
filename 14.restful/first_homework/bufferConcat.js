/**
 * Created by crystal on 3/9/16.
 */
/**
 * 1. list 一个由Buffer组成的数组
 * 2. 最后返回的Buffer的长度
 * Buffer.concat(list[,totalLength]);
 */
function concat(list,length){
    if(!Array.isArray(list)){
        throw new TypeError("The list argument must be an Array.")
    }

    if(length === undefined){
        length = 0;
        for(var i = 0; i < list.length; i++){
            length += list[i].length;
        }
    }

    var buffer = new Buffer(length);
    var pos = 0;
    for(var i = 0; i < list.length; i++){
        //复制Buffer： Buffer.copy(targetBuffer,targetStart,sourceStart,sourceEnd);
        list[i].copy(buffer, pos);
        pos += list[i].length;
    }

    return buffer;
}

var buf1 = new Buffer("珠");
var buf2 = new Buffer("峰");
var result = concat([buf1,buf2]);

console.log(result.toString());//珠峰