const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const mimeModule = require('getmimefromfile')
const events = require('events')

const dir = 'static'
var EventEmitter = new events.EventEmitter()

http.createServer((req,res)=>{
    var pathname = url.parse(req.url,true).pathname
    if(pathname=='/'){
        pathname='/index.html'
    }
    var extname = path.extname(pathname)
    // console.log(extname)
    if(pathname!='/favicon.ico'){
        fs.readFile(`${dir}${pathname}`,(err,result)=>{
            if(err){
                fs.readFile(`${dir}/404.html`,(err,result)=>{
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.write(result);
                })
            }
            else{
                const promise = new Promise((resolve,reject)=>{
                    mimeModule.getMime(fs,extname,(res)=>{
                        resolve(res)
                    })
                    
                })
                promise.then((value)=>{
                    res.writeHead(200,{"Content-Type":`${value};charset=utf-8`});
                    res.write(result)
                    res.end()
                })
                
            }
        })
    }
}).listen(1234)