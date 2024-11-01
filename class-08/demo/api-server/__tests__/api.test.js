'use strict';

const {server} = require('../lib/server.js');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Food APIs', ()=> {
    it('can post a food item', async()=> {
        const foodObj = {
            name: 'kiwi',
            calories: 25,
            type: 'FRUIT'
        }
        const data = await mockRequest.post('/api/v1/food').send(foodObj);
        // console.log("data.body", data.body);
        
        const record = data.body;
        Object.keys(foodObj).forEach(key=> {
            expect(record[key]).toEqual(foodObj[key]);
        });
    });

    it('can get() a food item', async()=> {
        const foodObj = {
            name: 'lemon',
            calories: 17,
            type: 'FRUIT'
        };
        const data = await mockRequest.post('/api/v1/food').send(foodObj) ;
        const record = data.body;
        const foodItemResponse =  await mockRequest.get(`/api/v1/food/${record._id}`) ;
        const foodItem = foodItemResponse.body[0];
        console.log("foodItem after get @@@@@@@@ : ",foodItem)
        Object.keys(foodObj).forEach(key=> {
            expect(foodItem[key]).toEqual(foodObj[key]);
        });

    });
})
