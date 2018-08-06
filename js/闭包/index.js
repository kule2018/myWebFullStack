// 闭包实际应用中主要用于封装变量，收敛权限

function isFirstLoad() {
  var _list = []
  return function(id) {
    if(_list.indexOf(id) >= 0) {
      return false
    } else {
      _list.push(id)
      return true
    }
  }
}

var firstLoad = isFirstLoad()
firstLoad(10)  //true
firstLoad(10) //false
firstLoad(20)  //true