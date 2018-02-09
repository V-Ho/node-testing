const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25)
    expect(spy).toHaveBeenCalledWith('Andrew', 25)
  })

  it('should call saveUser with user object', () => {
    var email = 'vho@mail.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })

})

/*
Use spies to simulate functions exported
- Here we test saveUser with user object
-
- Rewire uses 'rewire' instead of 'require'
- Simulate DB saveUser function with spy
 */