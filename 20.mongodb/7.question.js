/**
 * 1. session为空？
 * session中间件应该放在cookieParser下面
 * 放在路由的上面
 * req.session res.session
 * 2.我希望用mongoose更新匹配到的一条记录
 * 3. _v的用途
 * 4.
 */

var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({name : String});
//定义的实例方法，给实例增加方法
personSchema.method('greet', function () {
    console.log('how are you');
})

personSchema.method('grow up 1', function () {
    console.log('how are you');
})

var Person = mongoose.model('person', personSchema);
//实例
var person = new Person({
    name:'zfpx'
});

person.greet(); //how are you
