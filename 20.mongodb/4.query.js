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
//指定返回的字段 1表示 返回 0 不返回 ，,
//如果不指定的字段默认不返回
//_id如果不指定也会返回，如果不想让他返回需要显式指定为0
PersonModel.find({},{name:1, age:1, _id:0},function(err,docs){
    console.log(docs);
})
//当找到第一条匹配的记录时就立刻返回，不再继续查找了，返回单个对象
PersonModel.findOne({name:/^\w+9$/},{name:1, age:1, _id:0},function(err,doc){
    console.log(doc);
})
//按照ID进行查询
PersonModel.findById('56ee117356acb568054dd6d4',{name:1, age:1, _id:0},function(err,doc){
    console.log(doc);
})
