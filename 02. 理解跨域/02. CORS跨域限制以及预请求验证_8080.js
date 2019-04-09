const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	const html = fs.readFileSync('02. CORS跨域限制以及预请求验证_8080.html', 'utf8');
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(html);
}).listen(8080);