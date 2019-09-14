const express = require('express');
const bodyParser = require('body-parser');
const Images = require('../database/Image.js');

const app = express();

app.use('/:gameId', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// about game image at gameId = 1
app.get('/api/aboutImage/:gameId', (req, res) => {
  const gameId  = req.params.gameId;
  if (gameId === 1) {
    // console.log(results)
    Images.findOne({ gameId }).exec((err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results.imageUrl);
      }
    });
  } else {
    res.send('http://lorempixel.com/600/105/food/');
  }
})

// overview image at gameId = 2
app.get('/api/overviewImage/:gameId', (req, res) => {
  const gameId  = req.params.gameId;
  Images.findOne({ gameId }).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      const imageUrl = results.imageUrl;
      // console.log(imageUrl);
      res.json(imageUrl);
    }
  });
});

app.get('/api/images/:gameId/', (req, res) => {
  const game_name = req.params.game_name;
  const gameId = req.params.gameId;

  Images.find({ game_name: 'stardew_valley' }).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      // const imageUrl = results.imageUrl;
      res.json(results);
    }
  });
});

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

