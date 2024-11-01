'use strict';

// if we did not use supergoose then we need to connect to our DB.
// const mongoose = require('mongoose');
// const MONGOOSE_URI = 'mongodb://localhost:27017/401d6-food';
// mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

require('@code-fellows/supergoose');

const food = require('../models/food-collection.js');

describe('Food Model', () => {
  it('can create() a new food item', () => {
    let obj = { name: '---test food 2000', calories: 999, type: 'FRUIT' };
    return food.create(obj)
      .then(result => {
          console.log("result : ", result)
        Object.keys(obj).forEach(key => {
          expect(result[key]).toEqual(obj[key]);
        });
      });
  });

});