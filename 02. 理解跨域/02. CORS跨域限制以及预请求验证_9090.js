const http = require('http');
http.createServer((req, res) => {
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*',
		// 服务端设置预请求头
		'Access-Control-Allow-Headers': 'X-Text-Cors',
		// 服务端设置预请求方法
		'Access-Control-Allow-Methods': 'POST, PUT, Delete',
		// 设置预请求的时间, 表示在1000秒以内, 再次发起请求, 不会发预请求
		'Access-Control-Max-Age': '1000',

	});
	res.end('456');
}).listen(9090);