const db = require('./index.js');
const Image = require('./Image.js')
const faker = require('faker');

const seedImages = () => {
  for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 5);
    let image = new Image({ game_id: i, imageUrl: faker.image.food() })
    image.save()
  }
}

seedImages();





  // const seedImages = () => {
  //   let random = Math.floor(Math.random() * 5);
  //   let randomImages = [];
  //   for (var i = 0; i < random; i++) {
  //     randomImages.push(faker.random.imageUrl);
  //   }
  
  //   for (var j = 0; j < 100; j++) {
  //     db.save({
  //       imageUrl: faker.image.imageUrl
  //     });
  //   }
  // }