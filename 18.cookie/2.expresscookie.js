var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
// req.headers.cookie= name=zfpx; age=6
app.get('/', function (req, res) {
    // 如果请求中的 cookie 存在 visited, 则输出 cookie
    // 否则，设置 cookie 字段 visited, 并设置过期时间为10分钟
    if (req.cookies.visited) {
        res.send("欢迎老朋友");
    } else {
        res.cookie('visited', 1, {maxAge: 10 * 1000});
        res.send("欢迎新朋友");
    }
});
app.listen(80);