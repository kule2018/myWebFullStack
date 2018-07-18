var a = [1,2,3]
1.
// a.reverse().unshift(4)
// a.push(4); a.reverse()
// a.splice(3,1,4).reverse()
// console.log(a)

2.
// let b = a.slice()
// let b = a.splice(0,0)
let b = a.concat()
console.log(a)
console.log(b!=a)