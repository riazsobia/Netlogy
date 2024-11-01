'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

class Input {
    constructor() {
        let args = minimist(process.argv.slice(2));
        this.method = this.validateMethod(args.m || args.method);
        this.url = this.isUrl(args.u || args.url);
        this.body = this.getBody(args.b || args.body);
    }

    isUrl(url) {
        return isUrl(url) ? url : undefined;
    }

    validateMethod(method) {
        const validMethodsRegex = /get|put|post|delete|patch/i
        return validMethodsRegex.test(method) ? method : 'GET';
    }

    getBody(body) {
        // it will throw an error if it did not work
        try {
            return JSON.parse(body);
        } catch(err) {
            return body;
        }
    }

    valid() {
        return this.url && this.method;
    }
   
}


module.exports = Input;