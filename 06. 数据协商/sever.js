/**
 * Created by MonTage_fz on 2019/4/15
 */
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req, res) => {
    const html = fs.readFileSync('test.html');
    res.writeHead(200, {
        'Content-Type':'text/html',
        // 这里告诉客户端, 使用的是gzip的方法来压缩文件
        'Content-Encoding': 'gzip'
    });
    // 压缩文件的方法
    res.end(zlib.gzipSync(html));
}).listen(3000);
// 237