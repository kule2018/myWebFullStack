var arr = [11,2,2,4]
var zk ={
    name:'曾凯',
    toString:function () {
        return `${this.name}是鸠摩智大师喜欢的程序员`
    }
}

// 序列化 
console.log(zk.toString())
function func () {}

// 判断一个数组是数组
// 方法一
console.log(Object.prototype.toString.call(arr))
// 方法二
console.log(Array.isArray(arr))
// 方法三
console.log(arr instanceof Array)


