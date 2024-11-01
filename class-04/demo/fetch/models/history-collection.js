'use strict';

const schema = require('./history-schema');

class History {
    
    constructor() {

    }

    async create(record) {
        let newRecord =  new schema(record);
        let result = await newRecord.save();
        return result;
    }
    
    async get(_id) {
        if (_id) {
            return await schema.find({_id});
            // findById(_id), findOne({_id})
        } else {
            return await schema.find({});
        }
    }

    async update(_id, record) {
        return await schema.findByIdAndUpdate(_id, record, {new: true});
    }

   async delete(_id) {
        return await schema.deleteOne({_id});
        // findByIdAndDelete
    }
}

// exporting instance rather than the class
// this is called : Singleton (Design pattern)
module.exports = new History();