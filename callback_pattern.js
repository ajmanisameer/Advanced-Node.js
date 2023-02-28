console.log('Callbacks')

function uno(string, callback) {
  console.log(string)
  process.nextTick(() => {
    callback('UNO is Done')
  })
}

uno('This is UNO', (result) => {
  console.log(result)
})

console.log('End')


// Sequential execution of callbacks / Callback hell // pyramid od doom
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000)
}

console.log(`starting delays`)
delay(2, () => {
  console.log(`2 seconds`)
  delay(1, () => {
    console.log(`3 seconds`)
    delay(1, () => {
      console.log(`4 seconds`)
    })
  })
})


// `process.nextTick` is a meathod that allows the fn to be executed async but with the higher priority than setTimeouts
// Schedules the specific fn to be executed at the begenning of the next event loop iteration, immediately after the ccurrent one completes


// `process.nextTick` makes it useful for certain senarios, such as making sure 
// that fn is excecuted before any I/O operation are performed or
// before response is sent to the client
