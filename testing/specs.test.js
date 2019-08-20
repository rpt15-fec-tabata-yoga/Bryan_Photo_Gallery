const db = require('../database/index.js');
const Image = require('../database/Image.js')
const expect = require('chai').expect;

describe('Unit Testing', () => {
  it('Database will have 100 images within it', function(done) {
    Image.find({}).then(items => {
      expect(items.length).to.equal(100);
    });
    done();
  });

})