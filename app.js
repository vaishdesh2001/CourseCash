const express = require('express');

app = express();

// Dependencies
const bodyParser = require('body-parser');
const path = require('path');
const csv = require('csvtojson');

// Middleware goes here
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/public/front_end')))

// Data
const csvFilePath = path.join(__dirname,'/public/data/data.csv');

// Routes

// Data 
app.get('/data', (req, res) => {
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      res.send(jsonObj)
    })
})

// Server port config
app.listen(2020, () => {
  console.log('Server started on PORT: ', 2020);
})