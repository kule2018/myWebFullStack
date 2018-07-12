const http = require('http')
const url = require('url')
const ejs = require('ejs')
const fs = require('fs')

http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})

    var pathname = url.parse(req.url,true).pathname

    if(pathname == '/login') {
        ejs.renderFile('views/form.ejs',{},(err,data) => {
            res.end(data)
        })
    }

    if(pathname == '/index') {
        ejs.renderFile('views/index.ejs',{},(err,data) => {
            res.end(data)
        })
    }

    if(pathname == '/dologin' && req.method === 'GET') {

        var username = url.parse(req.url,true).query.username
        var password = url.parse(req.url,true).query.password
        fs.appendFile ('user.log',`username=${username}&password=${password}\n`,(err)=>{
            if(err){
                console.log(err)
            }
            console.log('记录成功1')
        })
        res.end('dologin GET')
    }

    if(pathname == '/dologin' && req.method === 'POST') {
        var postStr = ''
        req.on('data',(chunk)=>{
            postStr += chunk
        })
        req.on('end',(err,chunk)=>{
            fs.appendFile('user.log',`${postStr}\n`,(err)=>{
                if(err){
                    console.log(err)
                }
                console.log('记录成功')
            })
            console.log(postStr)
            res.end("<script>alert('记录成功');history.back();</script>")
        })
        
    }
    
}).listen(1234)