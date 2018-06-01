var obj = {
    a:1
};

// 在一个json 对象里面

//  key  in obj  来判断

// console.log("a" in obj);

// console.log("toString" in obj);
// 原型链对象上是否具有某属性
// obj 对象
// name 属性名
// obj a false
// obj b false
// obj toString true
function hasPrototypeProperty(o,name) {
    return name in obj && !obj.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(obj,""));
console.log(hasPrototypeProperty(obj,"a"));

// 函数是对象
// Person 可以是程序员， 作曲家， 作者得原型链对象
function Person (name) {
    this.name = name;
}

// 函数
// js 几乎所有得函数都有一个prototy属性
// 指针一样,指向一个对象

// 两种写法

Person.prototype = {
    getName:function(){
        return this.name
    }
}

// js原型式继承
// constructor Person  name + books    属性
// prototype Perso得方法链 + 方法链(自身方法)
function Author (name,books) {
    // 新的构造函数
    Person.call(this, name);
    this.books = books;
}
extend(Author,Person);

Author.prototype.getBooks = function() {
    return this.books;
}
// 构造函数
function extend(subClass,superClass){
    // 第三者,干净
    var F = function () {
        F.prototype = superClass.prototype;
        subClass.prototype = new F(); //新的对象
        //失去构造函数
        subClass.prototype.constructor = subClass;
    }
    return F;
}


const author = new Author('曾凯',['悲惨世界']);
console.log(author.name);
// console.log(author.getBooks())

// Person.prototype.getName = function () {
//     return this.name;
// }