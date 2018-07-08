// 1.判断服务器上面有没有upload目录,没有则创建这个目录
const fs = require('fs')
// fs.stat('upload',(err,stats)=>{
//     if(err){
//         fs.mkdir('upload',(err)=>{
//             if(err){
//                 console.log(err)
//             }
//             console.log('目录不存在，已创建')
//         })
//     }else{
//         console.log(stats.isDirectory())
//     }   
    
// })

// 2. 找出html目录下面的所有目录，然后打印出来
// 写法一   es6
// function getDir (dir) {
//     fs.readdir(dir,(err,files)=>{
//         if(err){
//             console.log(err)
//         }
//         files.forEach((item)=>{
//             fs.stat(`html/${item}`,(err,file)=>{       //fs.stat是异步方法
//                 if(err){
//                     return false
//                 }
//                 if(file.isDirectory()){
//                     console.log(item)
//                 }
//             })
//         })
//     })
// }
// getDir('html')

// 写法二  递归
var fileArr=[]
function getDir (dir) {
    fs.readdir(dir,(err,files)=>{
        if(err){
            console.log(err) 
        }
        else{     
            (function getFile(i) {
                if(i==files.length){
                    console.log('目录：');
                    console.log(fileArr);   /*打印出所有的目录*/
                    return false;
                }
                fs.stat(`${dir}/${files[i]}`,(err,stats)=>{
                    // console.log(files[i])
                    if(stats.isDirectory()){
                        fileArr.push(files[i])
                    }
                    getFile(i+1)
                })
            })(0)
        }
    })
}
getDir('html')