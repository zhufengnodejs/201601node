/**
 * 连接池是一种创建产管理 连接的技术
 * 1. 减少连接时间
 * 2. 简化编程模型
 * 3. 资源受控制
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host:'123.57.143.189',
    user:'root',
    password:'123456',
    database:'studb',
    connectionLimit:10
})

pool.query('select  * from user',function(err,rows){
    console.log(rows);
});