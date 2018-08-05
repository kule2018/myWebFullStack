// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000);
// Promise.resolve(console.log('3')).then(console.log(5))

// console.log(4)
function foo() {
    setTimeout(function () {
      console.log('id:', this.id);
    });
}
  
var id = 21;
foo.call({ id: 42 });