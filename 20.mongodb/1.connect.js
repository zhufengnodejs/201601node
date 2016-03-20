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

//根据模型创建实体，是指的个体对象
var personEntity = new PersonModel({
    name : "zfpx",
    age  : 6,
    email: "zfpx@qq.com",
    home:'beijing'
});
//用save 方法把自己保存到数据库中
personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        console.log(doc);
    }
});