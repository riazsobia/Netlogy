'use strict';

const http = {};

http.fetch = function(opts) {
    if (opts) {
        console.log(`Fetching ${opts.url}`);
        console.log(`Method is ${opts.method}`);
    }
}

module.exports = http;
