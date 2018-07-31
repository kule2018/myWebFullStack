function Animal (name) {
    this.name = name || 'Animal'

    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

// 组合继承:（推荐使用，仅仅消耗了一点儿内存）
// 核心:通过调用父类构造,继承父类的属性并保留传参的优点,然后通过将父类实例作为字类原型,实现函数服用
// 特点:
// 弥补了原型链继承和构造继承的缺点,可以继承实例属性/方法,也可以继承原型属性/方法
// 即是字类的实例,也是父类的实例
// 不存在引用属性共享的问题
// 可以传参
// 函数可以复用
// 缺点：
// 调用了两次父类构造函数，生成了两份实例（子类实例将原型上的那份实例屏蔽掉了）
function Cat(name) {
    Animal.call(this)
    this.name = name || 'Tom'
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat             //因为字类constructor丢失,需要手动修改construtor指向

var cat =  new Cat('pat')
console.log(cat.name)
cat.sleep()
cat.eat('fish')
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true