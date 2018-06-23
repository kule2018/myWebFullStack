const fs = require('fs')
// 做压缩
const zlib = require('zlib')
// 创建压缩上下文环境
const gzip = zlib.createGzip()
// readFile 一边读 写入另一个文件   Stream
const inFile = fs.createReadStream('./a.txt')

const outFile = fs.createWriteStream('./a.txt.gz')

inFile.pipe(gzip).pipe(outFile);