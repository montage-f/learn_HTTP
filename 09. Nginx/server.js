/**
 * Created by MonTage_fz on 2019/4/20
 */
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const html = fs.readFileSync('test.html', 'utf8');
    console.log(req.headers.host);
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.end(html);

}).listen(3000);