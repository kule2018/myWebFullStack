function Otaku (name,age) {
    this.name=name;
    this.age=age;
    this.habit='Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function()
{
    console.log(`I am ${this.name}`)
}

// const person = new Otaku('曾凯',18);
// person.sayYourName();

// 要返回一个新的对象
// 访问到Otaku 构造函数里的属性
// 访问到Otaku.prototype中的属性或方法

var person = objectFactory(Otaku,'鸠摩智',50);
// // 参数1是类,后几个参数。。。
// // js的函数参数异常灵活，数量可以补丁，形参可以不给
// // 还有... reset 运算符整合起来，都会跟arguments结合起来
function objectFactory(){
    console.log(arguments);
    // arguments是伪数组，不能使用shift，两种解决办法
    // var Constructor = Array.from(arguments)
    var Constructor = [].shift.call(arguments);
    var obj = new Object();
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
    return obj;
}
person.sayYourName();
   
    // var constructor = ?


