const http = require('http')
const ejs = require('ejs')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/xwj";
 
MongoClient.connect(url, {useNewUrlParser:true},function(err, db) {
  if (err) throw err;
  db.collection('user').find({}).toArray((err, result) =>{ // 返回集合中所有数据
    if (err) throw err;
    console.log(result);
    });
  db.close();
});