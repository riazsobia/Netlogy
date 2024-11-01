'use strict';

require('@code-fellows/supergoose');

const food = require('../models/food-collection');

describe('Food Model', ()=> {
    it('it can create()', async()=> {
        const foodObj = {
            name: 'apple',
            calories: 25,
            type: 'FRUIT'
        }
        const result = await food.create(foodObj);
        Object.keys(foodObj).forEach(key=> {
            expect(result[key]).toEqual(foodObj[key]);
        });
    });

    it('it can get()', async()=> {
        const bananaObj = {
            name: 'test-Banana',
            calories: 40,
            type: 'FRUIT'
        }
        const result = await food.create(bananaObj);
        const record = await food.get(result._id); // give me back the result obj in an array
        // console.log("record >> ", record);
        Object.keys(bananaObj).forEach(key=> {
            expect(record[0][key]).toEqual(bananaObj[key]);
        });
    });

    // add delete and put
});
