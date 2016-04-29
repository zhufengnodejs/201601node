/**
 * Created by crystal on 3/9/16.
 * 功能：
 * 查询 把后台存放的用户数组查出来放在table里
 * 增加 把用户填写的表单添加到后台
 * 删除
 * 修改
 */
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var url = require('url');

var users = [];

var server = http.createServer(function (request, response) {
    //把url转成url对象
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;

    if (pathname == '/') {
        pathname = '/user.html';
    }

    if (pathname == '/favicon.ico') {
        response.end('404');
    }
    if (pathname == '/') {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.readFile('./user.html', function (err, data) {
            response.end(data);
        })
    }else if(pathname == '/users'){
        var method = request.method.toLowerCase();
        switch (method){
            //新增加
            case 'post':
                //每当服务器收到客户端发过来的一段数据的时候就会触发data事件
                var str = '';
                var obj = {};
                request.on('data', function (data) {
                    str += data.toString();
                });

                request.on('end', function () {
                    obj = JSON.parse(str);
                    fs.readFile('./user.json', function (err, data) {
                        if (data.toString() != '') {
                            users = JSON.parse(data);
                        }

                        if (users.length == 0) {
                            obj.id = 1;
                        } else {
                            obj.id = users[users.length - 1].id + 1;
                        }
                        users.push(obj);
                        response.end('{"status":"success", "value":' + str + '}');

                        fs.writeFile('./user.json', JSON.stringify(users), {encoding: 'utf8',flag: 'w'}, function (err) {
                            if (err) {
                                response.end('{"status":"error"}');
                            } else {
                                response.end('{"status":"success"}');
                            }
                        })
                    })
                });
                break;
            case 'put':
                var str = '';
                var strObj = {};
                request.on('data', function (data) {
                    str = data.toString();
                })
                request.on('end', function () {
                    fs.readFile('./user.json', function (err, data) {
                        if (!err) {
                            strObj = JSON.parse(str);
                            strObj.id = parseInt(strObj.id);
                            if (data.toString() != '') {
                                users = JSON.parse(data);
                            }
                            for (var i = 0; i < users.length; i++) {
                                if (users[i].id == strObj.id) {
                                    users[i] = strObj;
                                }
                            }
                            response.end('{"status":"success", "value":' + JSON.stringify(users) + '}');
                        }
                        fs.writeFile('./user.json', JSON.stringify(users), 'utf8', function (err) {
                            if (err) {
                                response.end('{"status":"error"}');
                            } else {
                                response.end('{"status":"success"}');
                            }
                        })
                    })
                })
                break;
            case 'delete':
                var idstr = '';
                request.on('data', function (data) {
                    idstr = data.toString();
                });

                request.on('end', function () {
                    fs.readFile('./user.json', function (err, data) {
                        if (!err) {
                            fs.readFile('./user.json', function (err, data) {
                                if (!err) {
                                    if (data.toString() != '') {
                                        users = JSON.parse(data);
                                    }
                                    for (var i = 0; i < users.length; i++) {
                                        if (users[i].id == idstr) {
                                            users.splice(i, 1);
                                        }
                                    }
                                    response.end('{"status":"success", "value":' + JSON.stringify(users) + '}');
                                }
                                fs.writeFile('./user.json', JSON.stringify(users), 'utf8', function (err) {
                                    if (err) {
                                        response.end('{"status":"error"}');
                                    } else {
                                        response.end('{"status":"success"}');
                                    }
                                })

                            })

                        }
                    })
                })
                break;
            case 'get':
                //读取所有的用户
                fs.readFile('./user.json','utf8', function (err, data) {
                    if (!err) {
                        var result = data.toString() == '' ? '[]' : data.toString();
                        response.end('{"status":"success", "value":' + result + '}');
                    } else {
                        response.end('Query failed!')
                    }
                });
                break;
        }
    }else{
        fs.exists('.' + pathname, function (exists) {
            if (exists) {
                fs.readFile('.' + pathname, function (err, data) {
                    //如果读取文件出错了，则也报404错误
                    if (err) {
                        response.end();
                    } else {
                        response.write(data);
                        response.end();
                    }

                })
            } else {
                response.end();
            }
        });
    }


});

server.listen(3000, 'localhost');
