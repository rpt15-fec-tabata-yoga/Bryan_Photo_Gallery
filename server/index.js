const express = require('express');
const bodyParser = require('body-parser');
const Images = require('../database/Image.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/image/:game_id', (req, res) => {
  const game_id  = req.params.game_id;
  // const game_name = req.params.game_name
  // const imageUrl = req.params.imageUrl
  // console.log(req.params);
  // const { game_id } = req.params //76
  Images.findOne({ game_id }).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      // console.log('HERE IS THE RES --->', res)
      const imageUrl = results.imageUrl;
      res.json(imageUrl);
    }
  });
});

app.get('/api/image', (req, res) => {
  Images.find({}).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

