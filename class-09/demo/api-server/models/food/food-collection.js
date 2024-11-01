'use strict';

const Model = require('../model');
const schema = require('./food-schema');

class Food extends Model {
    constructor() {
        super(schema);
    }

   

}

module.exports = new Food();