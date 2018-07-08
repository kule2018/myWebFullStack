const fs = require('fs')
// 检测文件或目录
fs.stat('index.txt',(err,data)=>{
    if(err) {
        console.log(err)
        return false
    }
    console.log(`文件:`+data.isFile())
    console.log(`目录:`+data.isDirectory())
})

// 创建目录
// fs.mkdir('css',(err,data)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('创建目录成功')
// })

// fs.writeFile 创建写入文件
// fs.writeFile('t.txt','你好nodejs',(err)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('写入成功');
// })
// 追加写入（不覆盖）
// fs.appendFile('t.txt','追加了一句话\n',(err)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('追加内容成功')
// })
// 读取文件
// fs.readFile('t.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     // console.log(data.toString())
//     console.log(data)
// })
// 读取目录
fs.readdir('html',(err,data)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log(data)
})
// 重命名
// fs.rename('html/news.html','html/index.html',(err)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('文件改名成功')
// })
// 改名并剪切文件功能
// fs.rename('html/style.css','html/css/base.css',(err)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('文件剪切成功')
// })
// 删除目录
// fs.rmdir('t',(err)=>{
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('删除目录成功')
// })
// 删除文件
fs.unlink('index.txt',(err,data)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log('删除文件成功')
})
