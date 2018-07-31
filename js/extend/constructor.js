function Animal (name) {
    this.name = name || 'Animal'

    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
// 原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

// 构造继承
// 核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没有用到原型）
// 特点:
// 解决了原型链继承中,字类实例共享父类引用的属性的问题
// 创建字类实例时,可以向父类传递参数
// 可以实现多继承(call多个父类对象)
// 缺点:
// 实例并不是父类的实例,只是字类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性和方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
function Cat(name) {
    Animal.call(this,name)
    this.name = name || 'Tom'
}

var cat = new Cat('pat')
console.log(cat.name)
cat.sleep()
// cat.eat()     报错，无法继承父类原型方法/属性
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
