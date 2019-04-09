/**
 * Created by MonTage_fz on 2019/4/9
 */
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
	const html = fs.readFileSync('test.html', 'utf8');
	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(html);
	}
	if (req.url === '/script.js') {
		res.writeHead(200, {
			'Content-type': 'text/javascript',
			'Cache-Control':'max-age=1000',// 浏览器缓存时效
		});
		res.end(`console.log('script loaded 缓存')`);

	}
}).listen(8000);