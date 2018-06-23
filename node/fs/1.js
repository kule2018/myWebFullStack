// commonJS require NODE 内置支持的js模块化方案
const fs = require('fs')
let data;
const promise = new Promise((resolve,reject)=>{
    fs.readFile ('./f2.txt','utf8',(err,data) => {
        if(err){
            reject(err)
        }
        else{
            resolve(data)
        }
    });
})
promise.then((data) => {
    console.log('文件内容:'+data)
    console.log('读取完成, 做其他事情')
}).catch((err)=>{
    console.log(err)
})

