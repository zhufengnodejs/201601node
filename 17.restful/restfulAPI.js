var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.set('view engine','ejs');
//path.resolve  取当前目录的绝对路径
app.set('views',path.resolve());
app.use(bodyParser.urlencoded({extended:true}));
var users = [{id: 1, name: 'zfpx1'}, {id: 2, name: 'zfpx2'}];
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

app.listen(8080);