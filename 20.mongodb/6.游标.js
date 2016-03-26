//2 加载模块
var mongoose = require("mongoose");
//3. 连接数据库 mongod 服务器端  mongo客户端
//数据库的名称可以是不存在
var mongoose = mongoose.connect("mongodb://123.57.143.189:27017/zfpx");
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
var PersonModel = mongoose.model("person", PersonSchema);

PersonModel.find({name:/zfpx/},null,{limit:1},function(err,docs){
    console.log(docs);
});

//现在要分页查询，每页3条，查询第2页
//skip 跳过的条数 limit 限制返回的条数 sort排序 1升序 -1 降序
PersonModel.find({},{_id:0,name:1},{limit:3,skip:3,sort:{age:1,name:-1}},function(err,docs){
    console.log(docs);
});