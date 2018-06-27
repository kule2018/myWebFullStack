const fs = require('fs')

fs.appendFile('./c.txt','hello,欧系吴彦祖!','utf8',(err)=>{
    if(err) throw err;
    console.log('append成功');
})