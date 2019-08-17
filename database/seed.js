const db = require('./index.js');
const Image = require('./Image.js')
const faker = require('faker');

const seedImages = () => {
  for (let i = 0; i < 100; i++) {
    // let random = Math.floor(Math.random() * 5);
    let image = new Image({ 
      game_name: faker.lorem.word(), 
      imageUrl: faker.image.food() 
    });
    image.save()
  }
}

const stardewImages = [
  {
    game_name: 'stardew_valley',
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/animalStrip2.png'
  },
  {
    game_name: 'stardew_valley',
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/header.jpg'
  }
];

const seedStardewImages = function() {
  Image.create(stardewImages)
}

seedStardewImages();
seedImages(99);