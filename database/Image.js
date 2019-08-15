const db = require('./index.js');
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    game_id: {type: Number, default: 0},
    imageUrl: String
  })
  
  const Image = mongoose.model('Image', ImageSchema);
  
  // const save = (pic) => {
  //   var newImage = new Image({
  //     imageUrl: pic.imageURL
  //   })
  
  //   newImage.save(function(err) {
  //     if (err) {
  //       return console.log('Error saving to database', err);
  //     }
  //   })
  // }
  
  // const fetch = (callback) => {
  //   // console.log('GO FETCH');
  
  //   return Image.find({}).limit(1).exec((err, res) => {
  //     if (err) {
  //       console.log('Error fetching from DB');
  //     } else {
  //       callback(res);
  //     }
  //   })
  // }
  
  // module.exports.save = save;
  // module.exports.fetch = fetch;
  module.exports = Image;