/**
 * Created by MonTage_fz on 2019/4/8
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
	const html = fs.readFileSync(path.join(__dirname, 'port_8080.html'), 'utf8');
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(html);
}).listen(8080);