/**
 * Created by MonTage_fz on 2019/4/11
 */
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const html = fs.readFileSync('test.html', 'utf8');
    const host = req.headers.host;
    if (host === 'a.test.com') {
        res.writeHead(200, {
            'Set-Cookie': ['test=777',],
        });
    } else {
        res.writeHead(200, {
            // 'Set-Cookie': 'id=123' ,
            // 单个cookie设置 max-age=2, 表示cookie有效时长2s
            // httpOnly 可以禁止javaScript 来访问cookie
            'Set-Cookie': ['id=123;max-age=2', 'ID=456;httpOnly',],// 多个个cookie设置,  浏览器关闭, cookie就会自动清除
        });
    }
    res.end(html);

}).listen(8080);