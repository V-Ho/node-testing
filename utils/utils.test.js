//file contains test cases that assert if utils functions work correctly
const expect = require('expect')
const utils = require('./utils')

describe('Utils', () => {

  //Test with Mocha and Expect assertions
  it('should add 2 numbers', () => {
    var res = utils.add(7,11)

    expect(res).toBe(18).toBeA('number')
  })

  it('should add 2 numbers asynchronously', (done) => {
    utils.asyncAddCB(5,12, (sum) => {
      expect(sum).toBe(17).toBeA('number');
      done()
    })
  })
// pass in 2 numbers and callback - cb called with sum
// pass sum to assertion
// done tells mocha that asychronous callback is called after assertions
// without 'done' mocha would only test the timeout function

  it('should square a number', () => {
    var res = utils.square(4)
    expect(res).toBe(16).toBeA('number');
  })

  it('should square number asynchronously', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number')
      done()
    })
  })
})

// //Test using Mocha framework
// it('should add 2 numbers', () => {
//   var res = utils.add(33, 11);
//
//   if (res !== 44 ) {
//     throw new Error(`Expected 44, but got ${res}`)
//   }
// })
//
// it('should square 1 number', () => {
//   var res = utils.square(3);
//
//   if (res !== 9) {
//     throw new Error(`Expected 9 but got ${res}`)
//   }
// })
//
// //Test with Mocha and Expect assertions
// it('should add 2 numbers', () => {
//   var res = utils.add(7,11)
//
//   expect(res).toBe(18).toBeA('number')
// })
//
// it('should add 2 numbers asynchronously', (done) => {
//   utils.asyncAddCB(5,12, (sum) => {
//     expect(sum).toBe(17).toBeA('number');
//     done()
//   })
// })
// // pass in 2 numbers and callback - cb called with sum
// // pass sum to assertion
// // done tells mocha that asychronous callback is called after assertions
// // without 'done' mocha would only test the timeout function
//
// it('should square a number', () => {
//   var res = utils.square(4)
//   expect(res).toBe(16).toBeA('number');
// })
//
// it('should square number asynchronously', (done) => {
//   utils.asyncSquare(4, (square) => {
//     expect(square).toBe(16).toBeA('number')
//     done()
//   })
// })
//
//
// it('should verify first and last names are set', () => {
//   var user = { age: 32, location: 'Amsterdam' }
//   var res = utils.setName( user, 'Vanessa Ho')
//
//   expect(user).toEqual(res)
//   expect(res).toInclude({
//     firstName: 'Vanessa',
//     lastName: 'Ho'
//   })
// })
//
// it ('should add 2 numbers', () => {
//   utils.asyncAdd(5,12).then((res) => {
//
//   })
// })
//
//
// // //check random value
// // it('should produce some value', () => {
// //   expect(10).toNotBe(11).toBeAn('number')
// // })
// //
// // //check equality of objects and arrays
// // it('should be a different object', () => {
// //   expect({name: 'Vanessa'}).toNotBeA('string')
// // })
// //
// // it('should be the same object', () => {
// //   expect({age: 12}).toEqual({age: 12})
// // })
// //
// // it('should be included in the array', () => {
// //   expect([2,3,4]).toInclude(4)
// // })
// //
// // it('should be included in the object/array', () => {
// //   expect({
// //     name: 'VHo',
// //     age: 32,
// //     location: 'Amsterdam'
// //   }).toInclude({
// //     age: 32
// //   })
// // })
//
// /*
// 1. Call it to describe new test
// 2. Pass in description and callback, called when test executes
// 3. If asynchronous, pass in Done to tell Mocha
// whether or not test passed
// 4. Call utils function and pass in args needed, store var as result
// 5. If asynchronous, pass in callback which stores result
// 6. Use Expect library to make assertions about result (accuracy, type)
// 7. If asynchronous, call done otherwise test won't finish
//  */