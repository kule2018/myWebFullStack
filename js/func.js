// 方法调用模式
// 方法可以使用this访问自己所属的对象，所以它能从对象中取值或对对象进行修改。
// this到对象的绑定发生在调用的时候
// 通过this可取得他们所属对象的上下文的方法称为公有方法
var myObject = {
    value:0,
    //在x属性中此测试对象方法被调用前this指向为空
    x:console.log(this),
    increment:function(inc) {
        this.value+=typeof inc === 'number'?inc:1;
    }
};

myObject.increment();
console.log(myObject.value)
myObject.increment(2);
console.log(myObject.value)

// 函数调用模式
// 此模式调用函数时，this被绑定到全局对象。
var sum = add(3,4);
function add (a,b) {
    console.log(a+b)
}

