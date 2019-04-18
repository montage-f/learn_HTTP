/**
 * Created by MonTage_fz on 2019/4/18
 */
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const html = fs.readFileSync('test.html');
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {
            // 这个响应头的设置, 我们的链接只能使用引入的方式进行加载
            'Content-Security-Policy': 'default-src http: https:'
        });
        res.end(html);
    } else {
        const js = fs.readFileSync('test.js');
        res.writeHead(200, {
            'Content-type': 'application/javascript'
        });
        res.end(js);
    }

}).listen(3000);