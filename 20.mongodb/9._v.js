/**
 * 3. _v的用途
 * versionKey 版本锁
 * 先读出来-再更新-再保存
 * 100
 *   A 100 v=1.0 200 保存  判断现在数据库里的版本跟我当时查出来的是否一致
 *   B 100 v=1.0 0 保存
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://123.57.143.189:27017/today");
var personSchema = new mongoose.Schema({
    hobby : [String]},{
    collection:'person' //手工指定集合的名称
});

var PersonModel = mongoose.model('person', personSchema);
//PersonModel.create({hobby:'drinking'});

PersonModel.findOne({},function(err,doc){
    doc.hobby.push('1');
    //entity实体
    doc.save();
});
PersonModel.findOne({},function(err,doc){
    doc.hobby.push('2');
    //entity实体
    doc.save();
});