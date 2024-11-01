#!/usr/bin/env node

//shebang

// run this file and passing some arguments
// 1- url 
// 2- method: get/post/put/delete
'use strict';
// run my app : node index.js

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();
const httpObj = new HTTP();

options.valid() ? httpObj.fetch(options) : help();

function help() {
    console.log(`
        api USAGE: api -m <method> -u <url> -b '<body>'
        -m HTTP METHOD (put/post/get/delete/patch)
        -u URL 
        -b Body to send to the fetch and it should be JSON string in single quotes
    `)
}