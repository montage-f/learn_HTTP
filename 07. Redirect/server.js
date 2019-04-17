/**
 * Created by MonTage_fz on 2019/4/18
 */
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;
    console.log(`request url-${url}`);
    if (url === '/') {
        // 301状态码表示永久重定向, 一但使用301状态码, 服务器端在修改了代码之后, 如果不清理浏览器的缓存, 浏览器是无法感知服务器修改了代码
        // 302状态码表示临时重定向
        // 304自从上次请求后，请求的网页未修改过
        res.writeHead(302, {
            Location: '/redirect'
        });
        res.end();

    }
    if (url === '/redirect') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(`<div>redirect</div>`);
    }

}).listen(3000);