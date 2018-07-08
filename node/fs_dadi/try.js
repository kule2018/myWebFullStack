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
// function findDir (dir) {
//     fs.readdir(dir,(err,files)=>{
//         if(err){
//             console.log(err)
//         }
//         // console.log(files)
//         files.forEach((item)=>{
//             // console.log(item)
//             fs.stat(`html/${item}`,(err,file)=>{       //fs.stat是异步方法
//                 if(err){
//                     return false
//                 }
//                 if(file.isDirectory()){
//                     console.log(item)
//                 }
//                 // console.log(item)
//             })
//         })
//     })
// }
// findDir('html')

// function findDir (dir) {
    // fs.readdir('html',(err,files)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     // console.log(files)
    //     for(var i=0;i<files.length;i++){
    //         console.log(i)
    //         fs.stat(files[i],(err,file)=>{       //fs.stat是异步方法
    //             // if(err){
    //             //     return false
    //             // }
    //             // if(file.isDirectory()){
    //             //     console.log(files[i])
    //             // }
    //             console.log(i)
    //             console.log(files[i])
    //         })
    //     }
    // })

    for(let i=0;i<5;i++){
        setTimeout(() => {
            console.log(i)
        }, 200);
    }
// }
// findDir('html')