//2 加载模块
var mongoose = require("mongoose");
//3. 连接数据库 mongod 服务器端  mongo客户端
//数据库的名称可以是不存在
var db = mongoose.connect("mongodb://123.57.143.189:27017/zfpx");
//如果连接成功会执行error回调
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
//如果连接成功会执行open回调
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
//定义一个 schema,描述此集合里有哪些字段，字段是什么类型
//只有schema中有的属性才能被保存到数据库中
var PersonSchema = new mongoose.Schema({
    name : { type:String },
    home : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});
//创建模型，可以用它来操作数据库中的person集合，指的是整体
var PersonModel = db.model("person", PersonSchema);

PersonModel.find({ age:{ $in: 6}},function(error,docs){
    //查询age等于6的所有数据
    console.log(docs);
});


PersonModel.find({ age:{$in:[6,10000]}},function(error,docs){
    //可以把多个值组织成一个数组
    console.log(docs);
});

PersonModel.find({email:'email',"$or":[{"name":"zfpx1"},{"age":2000}]},function(error,docs){
    //查询name为zfpx或age为6的全部文档
    console.log(docs);
});
var start = new Date();
var end = new Date();

PersonModel.find({time:{$lt:end},time:{$gt:start}},function(error,docs){
    //查询name为zfpx或age为6的全部文档
    console.log(docs);
});
