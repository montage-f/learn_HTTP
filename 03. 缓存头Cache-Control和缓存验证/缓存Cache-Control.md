01. 可缓存性
- public => http经过的任何一个代理服务器都可以进行缓存
- private => 只允许当前发出请求的浏览器进行缓存
- no-cache => 不允许缓存


02. 到期
- max-age=`<seconds>`
- s-maxage=`<seconds>` 代理服务器里面才可以使用
- max-stale=`<seconds>`


03. 重新验证
- must-revalidate
- proxy-revalidate

