const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/image');

const ImageSchema = new mongoose.Schema({
  imageURL: String
})

const Image = mongoose.model('Image', ImageSchema);

const save = (pic) => {
  var newPic = new Image({
    imageURL: pic.imageURL
  })

  newPic.save(function(err) {
    if (err) {
      return console.log('Error saving to database', err);
    }
  })
}

const fetch = () => {
  console.log('GO FETCH');
}

module.exports.save = save;
module.exports.fetch = fetch;