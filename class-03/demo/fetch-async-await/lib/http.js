'use strict';

const superagent = require('superagent');
const History = require('../models/history-schema')

class HTTP {

   async fetch(opts) {
        if (opts) {
            let result = await superagent(opts.method, opts.url).send(opts.body)
            this.render(result) ;
           await this.save(opts);
        }
    }

   async save(opts) {
        let record = new History(opts);
        let saved = await record.save();
        return saved;
    }

    render(data) {
        // console.log("WORKED!!!")
        console.log(data.body);
    }
}

module.exports = HTTP;
