/**
 * Created by MonTage_fz on 2019/4/8
 */
const http = require('http');
http.createServer((req, res) => {
	// 设置CORS跨域
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	});
	res.end('port 9090');
}).listen(9090);