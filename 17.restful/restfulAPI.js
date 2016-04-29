var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.set('view engine','ejs');
//path.resolve  取当前目录的绝对路径
app.set('views',path.resolve());
app.use(bodyParser.urlencoded({extended:true}));
/*app.use(bodyParser.raw({
    type:'application/!*'
}));
app.use(bodyParser.text({
    type:'text/!*'
}));*/
app.use(function(req,res,next){
    console.log('body',req.body);
    next();
});
app.use(function(err,req,res,next){
    console.error(err);
    next();
});
/*app.post('/raw',function(req,res){
    res.send(req.body);
});*/
var users = [{id: 1, name: 'zfpx1',mny:100}, {id: 2, name: 'zfpx2',mny:100}];
/**
 * 1. 获取所有的用户 curl -v -H 'accept:text/html'  http://localhost:8080/users
 * 2.
 */
//1.获取所有的用户
app.get('/users', function (req, res) {
    //Accept:text/html,application/xml;q=0.9,image/webp,*/*;q=0.8
    var accept = req.headers['accept'];
    var acceptType = accept.split(',').map(function (item) {
        var values = item.split(';');
        return {
            type: values[0],//需要的文件类型
            q: values[1] ? values[1].split('=')[1] : 1 //权重 默认是1
        }
        //用优先级进行排序，取排名最高那个
    }).sort(function (a, b) {
        return b.q - a.q;
    })[0].type;
    console.log(acceptType);
    if(acceptType == 'text/plain'){
        res.setHeader('Content-Type',acceptType);
        res.send(users);
    }else if(acceptType == 'text/html'){
        //设置响应类型
      res.setHeader('Content-Type',acceptType);
        //渲染模板
       res.render('users.ejs',{
           users:users
       });
    }else{
        res.send(users);
    }
});

//返回某个用户信息
//curl  http://localhost:8080/users/1
app.get('/users/:id', function (req, res) {
     var id = req.params.id;
    var filteredUsers = users.filter(function(user){
        return user.id == id;
    });
   res.send(filteredUsers.length>0?filteredUsers[0]:'此用户不存在');
});

//新增加用户
// -X 指定请求方法 --data 指定请求体的数据
//curl -X POST --data "name=zfpx3"  http://localhost:8080/users
app.post('/users', function (req, res) {
  var addedUser = req.body;
    if(addedUser){
        //为增加的用户赋一个最大的ID
        addedUser.id = users[users.length-1].id+1;
        users.push(addedUser);
        //当新增加一个资源的时候要返回新生成的资源完整对象
        res.send(addedUser);
    }else{
        res.send({msg:'增加资源失败'});
    }
});
//整体更新全部属性
// curl -X PUT --data "id=2&name=zfpx20"  http://localhost:8080/users/2
app.put('/users/:id',function(req,res){
    var putUser = req.body;
    if(putUser){
        for(var i=0;i<users.length;i++){
            //判断当前用户和用户传进来要更新的用户ID是否一致
            if(users[i].id == req.params.id){
                users[i] = putUser;//把老的对象整体替换成新的对象
               break;
            }
        }
        res.send(putUser);
    }else{
        res.send({msg:'更新资源失败'});
    }
});
//局部更新 请求体里只传要更新的字段
//curl -X PATCH --data "name=zfpx200"  http://localhost:8080/users/2
app.patch('/users/:id',function(req,res){
    var updatedFields = req.body;
    if(updatedFields){
        for(var i=0;i<users.length;i++){
            //判断当前用户和用户传进来要更新的用户ID是否一致
            if(users[i].id == req.params.id){
              for(var attr in updatedFields){
                  //用新的值替换旧的值
                  if(updatedFields.hasOwnProperty(attr))
                    users[i][attr] = updatedFields[attr];
              }
                res.send(users[i]);
                break;
            }
        }

    }else{
        res.send({msg:'更新资源失败'});
    }
});
//删除
//curl -X DELETE   http://localhost:8080/users/2
app.delete('/users/:id',function(req,res){
    /*for(var i=0;i<users.length;i++){
        if(users[i].id == req.params.id){
            users.splice(i,1);
            res.send({});
            return;
        }
    }*/
    users  = users.filter(function(user){
           return user.id != req.params.id;
    });
    res.send({msg:'删除失败'});
});
//以资源为中间 URL里不要包含动词
app.post('/transaction/:fromId/:toId',function(){
  var money = req.body.money;

});

app.listen(8080);