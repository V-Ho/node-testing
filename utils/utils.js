//file conatins functions to be tested:

exports.add = (a, b) => {
  return a + b
}

exports.asyncAddCB = (a,b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 1000)
}

// calling callback triggers addition function

exports.square = (x) => {
  return x * x
}

exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x)
  }, 1000)
}

exports.setName = (user, fullName) => {
  var names = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]

  return user
}

exports.asyncAdd = (a,b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (a === 'number' && b === 'number') {
        resolve(a + b)
      } else {
        reject (error)
      }
    }, 2000)
  })
}



/*
-setName name takes in user object and fullName string
-setName splits fullName into var names array containing firstName and lastName


 */