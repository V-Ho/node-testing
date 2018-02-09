const express = require('express')
const port = process.env.PORT || 3002

//initialize app to use express
var app = express()

//set up routes
app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    // name: 'Node Testing'
  })
})

app.get('/meow', (req, res) => {
  res.send('meow meow meow')
})

app.get('/users', (req, res) => {
  res.status(200).send([
    { username: 'VHo',
      userid: 101
    },
    { username: 'Jess',
      userid: 102
    }
  ])
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

//export app to access from other files
module.exports.app = app


/*
Using supertest to test HTTP requests:
- create express app
- define routes
- make call to req
- make assertions for header, status code, body,


 */