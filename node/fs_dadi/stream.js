// 读取大文件
const fs = require('fs')
var fileReadStream = fs.createReadStream('output.txt')
// let count = 0
// var str = ''
// fileReadStream.on('data',(chunk)=>{
//     str+=chunk;
//     count++
// })
// fileReadStream.on('end',(chunk)=>{
//     console.log(str,count)
// })
// var data = '我是从数据库获取的数据，我要保存起来'
var fileWriteStream = fs.createWriteStream('input.txt')
// fileWriteStream.write(data,'utf8')
fileReadStream.pipe(fileWriteStream)

console.log('写入完成')