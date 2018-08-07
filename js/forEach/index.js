// 写一个能遍历数组和对象的forEach方法
function forEach(obj, fn) {
  var key
  if (Object.prototype.toString.call(obj) === "[object Array]") {
    obj.forEach( (item,index) => {
      fn(index, item)
    })
  }else {
    for(key in obj) {
      fn(key, obj[key])
    }
  }
}

var arr = [1,2,3]
var obj = {
  name: 'xx',
  age: 18
}
forEach(obj, (key, value) => {
  console.log(key, value)
})