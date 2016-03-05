function hello(name){
    console.log('hello2')
}
exports.hello = hello;
/**
 * 1.如果以属性方式的话，用exports module.exports 效果一样
 * 2. 如果需要导出的是一个引用类型，只使用module.exports
 **/