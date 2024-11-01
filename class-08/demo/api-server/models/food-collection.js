'use strict';

const food = require('./food-schema');
const Model = require('./mongo-model');

class Food extends Model {
    constructor() {
        super(food);
    }
}

module.exports = new Food();