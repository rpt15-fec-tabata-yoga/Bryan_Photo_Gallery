const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('WE GOT IT');
})

const port = 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})