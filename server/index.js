const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/image', (req, res) => {
  res.send('WE GOT IT');
  // res.status(200);
  // db.fetch(res.send.bind(res));
})

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})