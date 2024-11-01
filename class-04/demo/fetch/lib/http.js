'use strict';

const superagent = require('superagent');
const history = require('../models/history-collection');

class HTTP {

   async fetch(opts) {
        if (opts) {
            let result = await superagent(opts.method, opts.url).send(opts.body)
            this.render(result) ;
           let newRecord = await this.save(opts);
           console.log("newRecord -----> ", newRecord);
        }
    }

    async save(opts) {
        let result = await history.create(opts);
        console.log("result: ", result)
        return result;
    }

    render(data) {
        console.log(data.body);
    }
}

module.exports = HTTP;
