var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'123456',
    database:'studb'
});

connection.connect();
var sql = 'select * from student';
/**
 * err 错误对象
 * rows 返回的记录
 * fields 返回的字段 也就是列
 */
/*connection.query(sql,function(err,rows,fields){
    if(err)
        console.error(err);
    else{
        //console.log(rows);
        //console.log(fields);
        rows.forEach(function(row){
            console.log(row.name);
        })
    }
});*/
var username = 'zhangsan';
var password = '123456';
/*var sql = "insert into user(username,password) values('"+username+"','"+password+"')";
connection.query(sql,function(err,result){
    if(err)
        console.error(err);
    else{
        console.log(result);
    }
});*/

var sql = "select * from user where username=? and password=?";
connection.query(sql,[username,password],function(err,result){
    if(err)
        console.error(err);
    else{
        if(result.length>0){
            console.log('登陆成功');
        }else{
            console.log('登陆失败');
        }
    }
    connection.destroy();
});


