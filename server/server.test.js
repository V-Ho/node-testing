//set up supertest tests

const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

// asychronous test where we tell mocha to wait before determining if test successful
it('should return hello world! response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect({
      error: 'Page not found'
    })
    .end(done);
})

// make custom assertion using expect
it('should return hello world response with object', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found'
      });
    })
    .end(done);
})
// for custom assertion, we call expect, passing in a function
// then we call the function in the response expect something in res.body

// custom test that asserts status code, array of user objects exists
it('should get a username object as response', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        username: 'VHo',
        userid: 101
      })
    })
    .end(done)
})

//npm run test-watch