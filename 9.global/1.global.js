/**
 * 1. 内置模块 指定名字
 * 2. 文件模块 路径
 * 3. 第三方模块 指定名字
 * @type {exports|module.exports}
 */
var gl = require('./2.global.js');
//获取模块的文件的绝对路径
 console.log(__filename);
//获取 当前模块文件的所在的目录 的绝对路径
console.log(__dirname);
var a =10;
console.log(global.global.global);
/**
 *1.  global的属性可以不用引用，也不用声明，就可以直接用
 *2. 在node中在模块中能直接用有两种
 *  1. 是全局对象下面的属性
 *  2. 初始化模块时传入的参数
 *
 **/