'use strict';
const express = require('express');
const axios = require('axios');
const app = express()
const port = process.env.PORT || 3000;

const ENDPOINT = process.env.ENDPOINT || 'hola';

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    console.log(ENDPOINT)
    axios.get(ENDPOINT)
    .then(function (response) {
      // handle success
      console.log(response.data)
      res.render('index',{"ENDPOINT": ENDPOINT, "ANSWER":JSON.stringify(response.data)});
    })
    .catch(function (error) {
      // handle error
      res.render('index',{"ENDPOINT": ENDPOINT, "ANSWER":JSON.stringify(error)});
    })
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})