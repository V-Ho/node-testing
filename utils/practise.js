var square = (x) => {
  return x * x
}

console.log(square(3))

var add = (a, b) => a + b

console.log(add(3,2))
//
// var names = "V Ho, Jess L, Sebastian H"
// console.log(names)
// var re = " "
// var nameList = names.split(re)
// console.log(nameList)



// var setName = (user, fullName) => {
//   var names = fullName.split(' ')
//   user.firstName = names[0]
//   user.lastName = names[1]
//   return fullName
// }

// console.log(setName('vanessa Ho'))

setTimeout(() => {
  console.log('were setting the timeout!')
}, 3000)

var promise = new Promise((yay, nay) => {
  setTimeout(() => {
    yay('Promise Resolved');
    nay('Promise rejected')
  },2000)
})

promise.then((msg) => {
  console.log(msg)
}, (errorMsg) => {
  console.log(errorMsg)
})

var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b)
      } else {
        reject('REJECTED')
      }
    }, 4000)
  })
}

asyncAdd(5,12).then((res) => {
  console.log('Success, you have added: ', res)
}, (error) => {
  console.log('Too bad, you have an error: ', error)
})

asyncAdd(5,12).then((res) => {
  console.log('Addition: ', res);
  return asyncAdd(res, 10)
}).then((res) => {
  console.log('Chained addition: ', res)
}).catch((error) => {
  console.log('ERROR: ', error)
})

asyncAdd(6, 7).then((res) => {
  console.log('New Addition: ', res);
  return asyncAdd(res, 10);
}).then((res) => {
  console.log('New Chained addition: ', res)
  return asyncAdd(res, 10)
}).then((res) => {
  console.log('Addition to new chained addition: ', res)
}).catch((error) => {
  console.log(error)
})

// asyncAddCB = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 1000)
// }
//
// console.log(asyncAddCB(3,2))