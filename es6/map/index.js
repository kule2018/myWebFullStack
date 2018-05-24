const dogs =new Map()
dogs.set('Snickers',3)
dogs.set('Sunny',2)
dogs.set('Hugo',10)
dogs.set('Hugo',11)

dogs.forEach((val,key) => console.log(val,key))

for(const [key,val] of dogs){
    console.log(key,val)
}

let a = 1;
let b =2;
// 解构
[a,b]=[b,a];
console.log(a,b)

let apple= "🍎"

console.log(apple)

