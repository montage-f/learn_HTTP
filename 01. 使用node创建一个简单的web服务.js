/**
 * Created by MonTage_fz on 2019/4/8
 */
const http = require('http')


http.createServer((req, res) => {
	console.log('连接http请求', req.url);
	res.end('end')
}).listen(3000)