const db = require('./index.js');
const faker = require('faker');

const seedImages = () => {
  let random = Math.floor(Math.random() * 5);
  let randomImages = [];
  for (var i = 0; i < random; i++) {
    randomImages.push(faker.random.imageUrl);
  }

  for (var j = 0; j < 100; j++) {
    db.save({
      imageUrl: faker.imageUrl
    });
  }
}

seedImages();