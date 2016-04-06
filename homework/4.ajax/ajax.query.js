/**
 * Created by Akesure on 16-3-8.
 */
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var path=require('path');
var url=require('url');

var users=[];
//var id=-1;
//var query=false;
//var inArray=function(array,target,i){
//    target=JSON.parse(target);
//    i=Number(i);
    //array.forEach(function(value,key){
    //    console.log(value.username);
    //    console.log('=====');
    //    console.log(target.username);
    //    console.log(value.username==target.username);
    //   if(value.username==target.username){
    //       return true;
    //   }else{
    //       return false;
    //   }
    //});

    //for(var i= 0,l=array.length;i<l;i++){
        //console.log(array[i].username);
        //console.log(target.username);
        //console.log(array[i]);
        //if(array[i]&&array[i].username==target.username){
        //    return true;
        //}else{
        //    return false;
        //}
    //}
//};

/*===遍历出错部分===*/
var onArray=function(array,target){
    if(typeof target=='string')target=JSON.parse(target);
    //console.log(target.username);
    /*=====直接抛错就返回======
        ===查找一值，循环到就返回===
        ===查找多值，循环到最后才返回===
     */
    for(var i= 0,l=array.length;i<l;i++){
        //console.log(array[i].username==target.username);
        if(array[i]&&array[i].username==target.username){
            //console.log('相同');
            return array[i];
        }
    }
    //console.log(query);
    return false;
};

var inArrayCount=function(array,target){
    if(typeof target=='string')target=JSON.parse(target);
    for(var i= 0,l=array.length;i<l;i++){
        if(target&&array[i].username==target.username){
            return i;
        }
    }
    return -1;
}

var server=http.createServer(function(request,response){
    var urlObj=url.parse(request.url,true);
    if(urlObj.pathname=='/'){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./login.html',function(err,data){
            response.end(data);
        })
    }else if(urlObj.pathname=='/ajax.add'){
        var str='';
        request.on('data',function(data){
            str+=data.toString();
            //console.log(data);
        });
        request.on('end',function(){
            //console.log(!inArray(users,str,id));
            //console.log(id);
            if(!onArray(users,str)){
                //console.log(users);
                //console.log(str);
                users.push(JSON.parse(str));
                //id++;
            }else{
                var exist='用户名重复';
                response.statusCode=401;
                response.statusMessage='username exists';
                response.end(exist.toString());
            }
            //console.log(users);
            response.end(str);
        })
    }else if(urlObj.pathname=='/ajax.query'){
        var urlObj=url.parse(request.url,true);
        //console.log(urlObj);
        //console.log(urlObj.query.username);
        var str=urlObj.query;
        //console.log(onArray(users,str));
        if(onArray(users,str)){
            //var isCheck='用户名已找到';
            //response.write(isCheck);
            response.statusMessage='username is checked';
            var res=onArray(users,str);
            res.login=str.login;
            //console.log(res);
            response.end(JSON.stringify(res));
        }else{
            //var notCheck='用户名不存在，请新建';
            response.statusCode=404;
            response.statusMessage='username not exists';
            response.end();
        }
        //users.forEach(function(value){
        //    console.log(value.username);
        //    if(value.username==urlObj.query.username){
        //        var isCheck='用户名已找到';
        //        response.write(isCheck);
        //        response.end(str);
        //    }else{
        //        var notCheck='用户名不存在，请新建';
        //        response.statusCode=404;
        //        response.statusMessage='username not exists';
        //        response.end(notCheck);
        //    }
        //})
        //var str='';
        //request.on('data',function(data){
        //    str+=data.toString();
        //});
        //request.on('end',function(){
        //    console.log(str);
            //str=JSON.parse(str);
            //users.forEach(function(value){
            //    if(value.username==str.username){
            //        var isCheck='用户名已找到';
            //        response.write(isCheck);
            //        response.end(str);
            //    }else{
            //        var notCheck='用户名不存在，请新建';
            //        response.statusCode=404;
            //        response.statusMessage='username not exists';
            //        response.end(notCheck);
            //    }
            //})
            //for(var i= 0,l=users.length;i<l;i++){
            //    console.log(users[i].username);
            //    if(users[i].name==str.name){
            //        var isCheck='用户名已找到';
            //        response.write(isCheck);
            //        response.end(str);
            //    }else{
            //        var notCheck='用户名不存在，请新建';
            //        response.statusCode=404;
            //        response.statusMessage='username not exists';
            //        response.end(str);
            //    }
            //}
        //})
    }else if(urlObj.pathname=='/ajax.submit'){
        var str='';
        request.on('data',function(data){
            str+=data.toString();
        });
        request.on('end',function(){
            //console.log(!inArray(users,str,id));
            //console.log(id);
            var res=onArray(users,str);
            if(res.login){
                //console.log(users);
                //console.log(str);
                res.article=JSON.parse(str).article;
                //id++;
            }else{
                //var exist='用户名重复';
                //response.statusCode=401;
                //response.statusMessage='username exists';
                //response.end(exist.toString());
                response.statusCode=404;
                response.statusMessage='article no found';
                response.end();
            }
            //console.log(users);
            response.end(res.article);
        })
    }else if(urlObj.pathname=='/ajax.delete'){
        var urlObj=url.parse(request.url,true);
        var str=urlObj.query;
        var res=onArray(users,str);
        if(res){
            var del='删除成功';
            users.splice(inArrayCount(users,res),1);
            response.end(del);
        }else{
            response.statusCode=404;
            response.statusMessage="delete can't success";
            response.end();
        }
    }else if(urlObj.pathname=='/ajax.repair'){
        var str = '';
        var username = {
            username : 0
        };
        request.on('data',function(data){
            username.username = JSON.parse(data.toString()).username;
            str+=data.toString();
            console.log(username);
        });
        request.on('end',function(){
            var res=onArray(users,username);
            //console.log(res);
            //console.log(str);
            if(res.login){
                res.username=JSON.parse(str).reusername;
                res.age=JSON.parse(str).reage;
            }else{
                var login='user not login';
                response.statusCode=403;
                response.statusMessage=login;
                response.end();
            }
            response.end(JSON.stringify(res));
        });
    }
});

server.listen(8080,'localhost');