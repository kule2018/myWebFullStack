const http = require('http')
const url = require('url')
const ejs = require('ejs')

http.createServer((req,res)=>{

    var pathname = url.parse(req.url,true).pathname
    
    var msg = '你好！我是后台数据'
    var list = [
        '行无忌','九阳神功','乾坤大挪移'
    ]
    if(pathname == '/login') {
        ejs.renderFile('views/form.ejs',{
            msg,
            list
        },(err,data) => {
            res.end(data)
        })
    }
    
}).listen(1234)