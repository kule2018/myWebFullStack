const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res)=> {
  if (req.headers['accept-encoding'].indexOf('gzip')!=-1) {
    gzip = zlib.createGzip();
    res.writeHead(200, {
      'Content-Encoding': 'gzip',
      'Content-Type': 'text/plain;charset=utf-8'
    });
    fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/plain;charset=utf-8'
    });
    fs.createReadStream('./a.txt').pipe(res);
  }
});
server.listen(1314);
