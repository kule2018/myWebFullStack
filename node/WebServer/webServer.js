
const http = require('http')

const router = require('router')

http.createServer((req,res)=>{

    router.staticServer(req,res,'static')
    
}).listen(1234)