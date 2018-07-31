function Animal (name) {
    this.name = name || 'Animal'

    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

// 原型链继承：
    // 核心：将父类的实例作为字类的原型
    // 特点：非常纯粹的继承关系，实例式子类的实例也是父类的实例
    // 父类新增的原型方法/属性，子类都能访问到
    // 简单,易于实现
    // 缺点:
    // 要想为子类新增属性和方法，必须在new 父类这样的语句之后执行，不能放在构造器中

function Cat(color) {
    this.color = color
    this.run = function () {
        console.log(this.name + '正在跑')
    }
}


Cat.prototype = new Animal()
Cat.prototype.name = 'cat'
// 测试继承结果
var cat = new Cat('white')
console.log(cat.name)
console.log(cat.color)
cat.eat('fish')
cat.sleep()
cat.run()
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true
