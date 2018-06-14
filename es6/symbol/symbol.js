const obj = {
    toString(){
        return 'abc'
    }
}
var s1 = Symbol(obj);
var s2 = Symbol(obj)
console.log(s1 == s2);
// Symbol 无法隐式转换
// console.log(`your Symbol is${s1}`)
// Symbol可以显式地转换
console.log(toString(s2))

// console.log(typeof s)
// console.log(s instanceof Symbol)   