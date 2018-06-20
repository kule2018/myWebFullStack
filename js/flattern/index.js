// 1. flattern 功能以后慢慢学
// 2. 数组的一些超纲但常用, npm包提供了这种功能
// 3. loadash  underscore  代码的宿主环境  命令行 
// 4. npm init -y package.json
// 5. yarn add lodash
// 6. 在当前文件中引入node_modules下的lodash
// 7. 使用它完成flattern
// lodash 是在node_modules(本地项目中npm包),    模块


var _ = require('lodash')

// 数组扁平化
const arr = [1,2,[3,4],[5,[6,7]]];
// console.log(_.flattenDeep(arr));

// 手写一个flattenDeep


// 方法一
// function flattern(arr) {
//     if(!Array.isArray(arr)) return;
//     var newArr = []
//     function fn (arr) {
//         for(let i =0;i<arr.length;i+=1){
//             if(arr[i].length){
//                 fn(arr[i]);
//             }else {
//                 newArr.push(arr[i]);
//             }
//         }
//     }
//     fn(arr);
//     return newArr;
// }

// const arr = [1,2,[3,4],[5,[6,7]]];
// 方法二
function flatten (arr) {
    // 削藩
    return arr.reduce(function(prev,next) {
        // console.log(prev,next);
        return prev.concat(Array.isArray(next)?flatten(next):next)
    },[])
}
console.log(flatten (arr))

// 方法三
// console.log(arr.toString().split(','))


// 数组去重
// const arr2 = [23,3,3,5,1,]
// console.log(_.uniq(arr2))
