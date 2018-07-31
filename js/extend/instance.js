function Animal (name) {
    this.name = name || 'Animal'

    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

// 实例继承：
// 核心：为父类实例添加新特性，作为子类实例返回
// 特点：
// 不限制调用方式,不管是new字类(),还是字类(),返回的对象具有相同的效果
// 缺点:
// 实例是父类的实例,不是字类的实例
// 不支持多继承
function Cat(name) {
    var instance = new Animal()
    instance.name = name || 'Tom'
    return instance
}

var cat = new Cat()
console.log(cat.name)
cat.sleep()
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false