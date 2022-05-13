const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 8002
const pronunciationsList = require('./pronunciations')

app.get('/api/pronunciations', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(pronunciationsList)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var httpServer = http.createServer(app)
httpServer.listen(port, 'localhost', function () {
  console.log('The express server is running here', port)
})