console.log(1)

setTimeout(() => {
  console.log(2)
}, 1000)

Promise.resolve(console.log(3)).then(() => {
  console.log(5)
  Promise.resolve()
    .then(() => {
      console.log(0)
      return 9
    })
    .then(res => {
      console.log(res)
    })
})

Promise.resolve(console.log(6)).then(console.log(7))

console.log(4)

function sleep(duration) {
  return new Promise((resolve, reject) => {
    console.log("b")
    setTimeout(resolve, duration)
  })
}
console.log("a")
sleep(1000).then(() => {
  console.log("c")
})
