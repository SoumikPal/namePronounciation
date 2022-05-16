require('dotenv').config();
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8002
const pronunciationsList = require('./pronunciations')

app.get('/api/pronunciations', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(pronunciationsList)
})

app.get('/api/get-speech-token', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const speechKey = 'c70c20199fb0429992ac543f60f5fc3e';
  const speechRegion = 'eastus';
  
  if (speechKey === 'paste-your-speech-key-here' || speechRegion === 'paste-your-speech-region-here') {
      res.status(400).send('You forgot to add your speech key or region to the .env file.');
  } else {
      const headers = {
          'Ocp-Apim-Subscription-Key': speechKey,
          'Content-Type': 'application/x-www-form-urlencoded'
        }

      try {
          const tokenResponse = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, {headers});
          res.send({ token: tokenResponse.data, region: speechRegion });
      } catch (err) {
          console.log(err)
          res.status(401).send('There was an error authorizing your speech key.');
      }
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var httpServer = http.createServer(app)
httpServer.listen(port, 'localhost', function () {
  console.log('The express server is running here', port)
})