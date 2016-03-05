// Buffer 类似于数组
// Buffer里面只能放字节 0-255
// 指定大小
var buffer = new Buffer(1);
buffer[0] = 16;
buffer[1] = 4;
console.log(buffer);
//通过字符串来创建
console.log(new Buffer("珠"));

//通过数组来创建
console.log(new Buffer([0x0f,2,3]));
