'use strict';

const foodSchema = require('./food-schema');

class Food {
    constructor() {

    }

    create(record) {
        console.log("inside create!")
        let newRecord = new foodSchema(record);
        console.log("newRecord : ", newRecord)
        return newRecord.save();
    }

     get(_id) {
        if (_id) {
            return foodSchema.find({_id});
        } else {
            return foodSchema.find();
        }
    }

    update(_id, record) {
        return foodSchema.findByIdAndUpdate(_id, record, {new: true})
    }

    delete(_id) {
        return foodSchema.findByIdAndDelete(_id);
    }

}

module.exports = new Food();