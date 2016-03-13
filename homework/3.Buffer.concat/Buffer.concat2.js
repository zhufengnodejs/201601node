/**
 * Created by Akesure on 16-3-8.
 */
var buf1=new Buffer("珠");
var buf2=new Buffer("峰");

function concat(size,length){
    //var newSize=new Array();
    //size.prototype.slice.call(size,0);
    //size.forEach(function(buf){
    //    newSize.push(buf);
    //});
    var str='';
    for(var i=0,l=size.length;i<l;i++){
        str+=size[i].toString();
    }
    if(Buffer.byteLength(str)==length)return str;
}

var result=concat([buf1,buf2],6);

console.log(result.toString());
