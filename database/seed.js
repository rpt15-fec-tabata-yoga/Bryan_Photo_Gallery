const db = require('./index.js');
const Image = require('./Image.js')
const faker = require('faker');

const stardewImages = [
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/animalStrip2.png'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/header.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_10628b4a811c0a925a1433d4323f78c7017dbbe4.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_30aeedc47e731232ade368831a598d6545346f70.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_37f15ea893ec1fa7c9e73106f512e98161bac61b.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_5e327e4cfc49d8137f8014e728eae3c0e6be2dca.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_6422d297347258086b389e3d5d9c0e0c698312e4.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_64d942a86eb527ac817f30cc04406796860a6fc1.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_dee23745da417d2ceb0b16d9238bddbf5e227138.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_f6f4c727570d753b2b5d8da6af4e0c38fe489059.1920x1080.jpg'
  },
  {
    imageUrl: 'https://steamimages.s3-us-west-1.amazonaws.com/ss_f79d2066dfaf32bbe87868d36db4845f771eddbd.1920x1080.jpg'
  }
];

const seedImages = (num) => {
  let game_name;
  let imageUrl;
  for (let i = 0; i < num; i++) {
    game_name = (i < 17) ? 'stardew_valley' : faker.lorem.word();
    // iterate through images url and assign to imageURL prop
    imageUrl = (i < 17 ) ? stardewImages[i].imageUrl : faker.image.food();
    // if stardew_valley arr.length is max then fake the data
    let image = new Image({ 
      gameId: i+1, 
      game_name, 
      imageUrl
    });
    image.save()
  }
}

seedImages(100);