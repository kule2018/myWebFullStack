// WeakMap 提供缓存能力， 提供私有访问的控制

const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { name, age });
  }
  getName() {
    return privateData.get(this).name;
  }
  getAge() {
    return privateData.get(this).age
  }
}

const zk = new Person('zk', 18);
console.log(zk.getName());

zk.name = '曾凯';