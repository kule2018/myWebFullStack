const http = require('http')
const url = require('url')

http.createServer((req,res)=>{

    // 发送http头部
    // http 状态值：200 ：OK 文件类型html  字符集utf-8
    if(req.url != '/favicon.ico'){
        // url.parse第二个参数如果为true 表示将返回值转换为json对象格式
        var result = url.parse(req.url,true)
        console.log(result.query)
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write('你好，nodejs');
    url.parse
    res.end();   //结束响应
}).listen(1314)