// console.log('Hello Node')

// RESOLVE
const delay = (seconds) => new Promise((resolve, reject) => {

  if (seconds > 3) {
    reject(new Error(`${seconds} is too long!!!`))
  } else {
    setTimeout(() => {
      resolve('Long delay has ended')
    }, seconds * 1000)
  }

})

delay(4).then((message) => {
  console.log(message)
}).then(() => 42).then((num) => {
  console.log(num)
}).catch((error) => {
  console.log(`Error: ${error.message}`)
})


console.log(`end long tick`)