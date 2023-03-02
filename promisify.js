var fs = require('fs')
var { promisify } = require('util')


const delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} seconds is too long`))
  } else {
    setTimeout(() => {
      callback(null, `${seconds} delay is over`)
    }, seconds * 1000)
  }
}

var promiseDelay = promisify(delay)

promiseDelay(5).then(console.log)
  .catch((error) => console.log(`error: ${error.message}`))

// callback way
// delay(2, (err, message) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log(message)
//   }
// })

// using promisy into FileSystem 
// all meathods by default uses callbacks
var writeFile = promisify(fs.writeFile)

writeFile('sample.txt', 'This is a sample')
  .then(() => console.log(`file successfully created`))
  .catch((error) => console.log('error creating a file'))