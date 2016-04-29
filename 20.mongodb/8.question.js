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
mongoose.connect("mongodb://123.57.143.189:27017/today");
var personSchema = new mongoose.Schema({name : String,age:Number},{
    collection:'person' //手工指定集合的名称
});
//给模型增加方法
personSchema.static('removeOne',function(query,options,callback){
    //this === model
    var cb = arguments[arguments.length-1];
    this.findOne(query,function(err,doc){
        if(doc){
            this.remove({_id:doc._id},function(err,result){
                cb(err,result);
            });
        }
    });
});
var PersonModel = mongoose.model('person', personSchema);
//PersonModel.create({name:'zfpx'});
//PersonModel.create({name:'zfpx'});
//可以更新一条也可以批量更新
//PersonModel.update({name:'zfpx'},{$set:{age:100}},{multi:true},function(){});


PersonModel.removeOne({name:'zfpx'},function(err,result){
    console.log(result);
});
