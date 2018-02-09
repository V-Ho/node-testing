var db = require('./db')

exports.handleSignup = (email, password) => {
  // Check if email already exists
  // Save user to db
  // Send welcome email

  db.saveUser({
    email, password
  })  // here we create user object with 2 properties (email, passwd)
}

db.saveUser({
  email: email,
  password: password
})

db.saveUser({ email, password})

/*
Here our handleSignup method takes in email and password,
then saves to db
challenging to test bc we need to do several things:
-check if email & user exist
-check if saveUser function works

-instead, use spies to fake saveUser function to ensure that
during handleSignup, saveUser gets called
-then when saveUser gets called, we can make assertions to test
*/