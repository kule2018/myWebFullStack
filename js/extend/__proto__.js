// __proto__ 对象具有私有属性
function Foo() {

}
var Boo = {
    name:'Boo'
}
Foo.prototype = Boo;
console.log(Foo.prototype)
var f = new Foo();
console.log(f.__proto__);
console.log(f.__proto__ === Boo)
console.log(Foo.prototype === Boo)
// Object.getPrototypeOf(f) === f.__proto__

function Person (name) {
    this.name = name
}
Person.prototype = {
    constructor:Person,
    sayName:function(){
        console.log('my name is'+ this.name);
    }
}
var p1 = new Person('ligang')
console.log(p1.__proto__ === Person.prototype)
