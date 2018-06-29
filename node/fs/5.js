const fs = require('fs');

// 异步
fs.writeFile('./b.txt','hello world','utf8',(err)=>{
    if (err) throw err;
    console.log('文件写入成功')
})

fs.writeFileSync('c.txt','大家好，欧系杂杂烩！','utf8');
console.log('c文件写入成功')