const Person = function(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

var pi = New(Person, "hello world")
console.log(pi.getName(), pi)

function New(fn) {
  const obj = {}
  if (fn.prototype !== null) {
    obj.__proto__ = fn.prototype
  }

  const rec = fn.apply(obj, Array.prototype.slice.call(arguments, 1))

  if (rec !== null && (typeof rec == "object" || typeof rec == "function")) {
    return rec
  }
  return obj
}
