const express = require('express');
const bodyParser = require('body-parser');
const Images = require('../database/Image.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/image', (req, res) => {
  Images.findOne({}).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  })
});

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})