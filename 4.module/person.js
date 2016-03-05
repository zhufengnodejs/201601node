function Person(name){
    this.name = name;
}
var exports = module.exports;
module.exports = Person;
/**
 * 1.如果以属性方式的话，用exports module.exports 效果一样
 * 2. 如果需要导出的是一个引用类型，只使用module.exports
 **/