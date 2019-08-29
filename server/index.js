const express = require('express');
const bodyParser = require('body-parser');
const Images = require('../database/Image.js');

const app = express();

app.use('/:gameId/:game_name', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/image/:gameId', (req, res) => {
  const gameId  = req.params.gameId;
  // const game_name = req.params.game_name
  // const imageUrl = req.params.imageUrl
  // console.log(req.params);
  // const { game_id } = req.params //76
  Images.findOne({ gameId }).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      // console.log('HERE IS THE RES --->', res)
      const imageUrl = results.imageUrl;
      res.json(imageUrl);
    }
  });
});

app.get('/api/image/:gameId/:game_name', (req, res) => {
  const game_name = req.params.game_name;
  const gameId = req.params.gameId;
  // console.log('req.params', req.params);
  // console.log('gameId', gameId);

  Images.find({ game_name }).sort({ gameId: 1 }).exec((err, results) => {
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

