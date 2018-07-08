const http = require('http')
const config = require('./config')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write('commonjs规范学习')
    console.log(config.str)
    res.end()
}).listen(1234)