// 方法一：
// function reverse (str) {
//     var oldStr = str.split('')
//     var newStr = []
//     oldStr.map( function(item) {
//         newStr.unshift(item)
//     })
//     console.log(newStr.join(''))
// }
// reverse('abc')

// 方法二：
// function reverse (str) {
//     var newStr = ''
//     for(var i=str.length-1; i>=0; i--) {
//         newStr += str[i]
//     }
//     console.log(newStr)
// }
// reverse('abcdefasf')

// var a = [0,1,2,3,4]
// var b = a.filter((n) => {
//     return n%2;
// })
// console.log(b)
// function bind(func, context) {
//     var F = function() {
//         var args = Array.prototype.slice.call(arguments,0)
//         func.call(context,args)
//         // func.apply(context,arguments)
//     }
//     return F
// }
// function test1(a, b) {
//     console.log(a + this.name);
// }

// bind(test1,{name: 'nowcoder'})('Hello' + " ")
var str = 'array'
var arr = str.split('')
console.log(arr)

var arr = [ 'a', 'r', 'r', 'a', 'y' ]
var newStr = arr.join('')
console.log(newStr)