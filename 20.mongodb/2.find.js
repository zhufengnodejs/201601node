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
//查询名字叫zfpx7的用户
/*PersonModel.find({name:'zfpx7'},function(err,docs){
       if(err){
           console.error(err);
       }else{
           console.log(docs);
       }
});*/
//向集合中插入10个文档
for(var i=1;i<=10;i++){
    //向数据中保存文档
    PersonModel.create({name:'zfpx'+i,age:i},function(err,doc){
        if(err)console.log(err);
        else
          console.log(doc);// doci
    });
    //所有的异步方法都是在所有的同步方法执行完毕之后才执行的
    console.log(i);
}