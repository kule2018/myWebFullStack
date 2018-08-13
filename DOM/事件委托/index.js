// function classNames() {
//   var temp = [];
//   for(let key in arguments) {
//     if(typeof arguments[key] === 'String') {
//       temp.push(arguments[key])

//     }else if (Object.prototype.toString.call(arguments[key]) === '[Object Object]'){
//       for(let item in arguments[key]){
//         if(arguments[key][item] == true){
//           temp.push(arguments[key])
//         }
//       }

//     }else if(Object.prototype.toString.call(arguments[key]) === '[Object Array]'){
//       for(var j=0; j< arguments[key].length;j++) {
//         if(arguments[key][j] == true) {
//           temp.push(arguments[key][j])
//         }
//       }
//     }
//   }
//   return temp.join(' ')
// }

// console.log(classNames('asdv',{asd:false},'ad'))

// var arr = [1，1，2，3，5，8…]

function fbnqsl(n) {

  if(n == 0 || n == 1){
    return 1
  }else {
    return fbnqsl(n-1) + fbnqsl(n-2)
  }
}

console.log(fbnqsl(5))
