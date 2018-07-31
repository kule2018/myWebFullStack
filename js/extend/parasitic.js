function Animal (name) {
    this.name = name || 'Animal'

    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

// 寄生组合继承：（强烈推荐）
// 核心：
// 通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方式/属性，避免了组合继承的缺点
// 特点：
// 堪称完美
// 缺点：
// 写起来比较复杂

function Cat(name) {
    Animal.call(this)
    this.name = name || 'Tom'
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function() {}
    Super.prototype = Animal.prototype
    // 将实例作为子类的原型
    Cat.prototype = new Super()
})()

var cat = new Cat('pat')
console.log(cat.name)
cat.sleep()
cat.eat('fish')
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
