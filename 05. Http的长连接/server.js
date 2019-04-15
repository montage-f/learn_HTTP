/**
 * Created by MonTage_fz on 2019/4/15
 */
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // 在http1.1下面, 请求是默认保持长连接 Connection:keep-alive
    const html = fs.readFileSync('index.html');
    const img = fs.readFileSync('image.jpg');
    const url = req.url;
    if (url === '/') {
        res.end(html);
    } else {
        res.writeHead(200, {
            'Connection': 'close',// 关闭 长连接
        });
        res.end(img);
    }

}).listen(3000);