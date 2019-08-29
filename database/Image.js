const db = require('./index.js');
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    gameId: Number,
    game_name: String,
    imageUrl: String
  });
  
  const Image = mongoose.model('Image', ImageSchema);
  
  module.exports = Image;


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