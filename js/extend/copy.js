function Animal (name) {
    this.name = name || 'Animal'

    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

// 拷贝继承:
// 特点:
// 支持多继承
// 缺点:
// 效率低,占用内存高(因为要循环拷贝属性)
// 无法获取父类不可枚举的属性

function Cat(name) {
    var animal = new Animal()
    for(var p in animal) {
        Cat.prototype[p] = animal[p]
    }
    Cat.prototype.name = name || 'Tom'
}

var cat =  new Cat()
console.log(cat.name)
cat.sleep()
