'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

function Input() {
    console.log('Row arguments from CLI : ', process.argv );
    // ["", "-", "url", "localhost:3000/students"] messy arguments 
    console.log("process.argv.slice(2) >> ", process.argv.slice(2))
    const args = minimist(process.argv.slice(2));
    // {
        // url : "localhost:3000/students",
        // method: "GET"
    // }
    console.log("args after minimist: ", args)
    this.method = this.validateMethod(args.m || args.method);
    this.url = this.isUrl(args.u || args.url);
}

Input.prototype.isUrl = function(url) {
    return isUrl(url) ? url : undefined;
}

Input.prototype.validateMethod = function(method) {
    const validMethodsRegex = /get|put|post|delete|patch/i
    return validMethodsRegex.test(method) ? method : 'GET';
}

module.exports = Input;