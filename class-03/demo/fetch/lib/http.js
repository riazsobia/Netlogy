'use strict';

const superagent = require('superagent');
const History = require('../models/history-schema')

class HTTP {

    fetch(opts) {
        if (opts) {
            return superagent(opts.method, opts.url)
                .send(opts.body)
                .then((result)=> this.render(result) )
                .then(()=> this.save(opts))
        }
    }

    save(opts) {
        let record = new History(opts);
        let saved = record.save();
        return saved;
    }

    render(data) {
        // console.log("WORKED!!!")
        console.log(data.body);
    }
}

module.exports = HTTP;
