
// 参数不限
// js函数很灵活，参数得数量都可以不定
function sum () {
    // this 自动生成，函数执行得方式决定
    // arguments 所有得参数
    // array.from  将原料变成数组
    let total = 0;
    console.log(arguments);
    Array.from(arguments).forEach(i => {
        total += i;
    })
    
    // for(let i=0;i<arguments.length;i++){
    //     total += arguments[i];
    // }
    return total;
}

console.log(sum (1,2,3,4,5,6,7,8,9,10));
