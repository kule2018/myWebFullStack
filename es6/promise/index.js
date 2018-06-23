const Promise = require('./promise.js');

// 将要执行的耗时任务,封在executor,实例化时就开始执行
// resolve ?
// reject ? 形参 类型都是函数

let a = function () {
    let value = 'a'
    return value
}
const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('hello')
    }, 1000);
})

promise.then((data) => {
    console.log(data);
},(err)=>{
    console.log(err);
})