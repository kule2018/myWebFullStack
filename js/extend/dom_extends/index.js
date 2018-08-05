function Elem(id) {
  this.elem = document.getElementById(id)
  //return this
}

Elem.prototype.html = function(val) {
  var elem = this.elem
  if(val) {
    elem.innerHTML = val
    return this   //链式操作
  }else {
    return elem.innerHTML
  }
}

Elem.prototype.on = function(type, fn) {
  var elem = this.elem
  elem.addEventListener(type, fn)
  console.log(this)
  return this
}

var div1 = new Elem('header')
div1.html('<p>hello</p>').on('click', ()=>{
  alert('clicked')})

