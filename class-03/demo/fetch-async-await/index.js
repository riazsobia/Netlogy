#!/usr/bin/env node

//shebang

// run this file and passing some arguments
// 1- url 
// 2- method: get/post/put/delete
'use strict';
// run my app : node index.js
const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

// this should be in .env file
const MONGOOSE_URI = 'mongodb://localhost:27017/401d6-history';

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const options = new Input();
const httpObj = new HTTP();

async function doFetch(){
    if (options.valid())  {
        console.log("before fetch!")
        await httpObj.fetch(options);
        mongoose.disconnect();
    } else {
        help();
    }
}

// if (options.valid()) {
//     httpObj.fetch(options).then(()=> {
//         mongoose.disconnect();
//     });
    
// } else {
//     help();
// }

function help() {
    console.log(`
        api USAGE: api -m <method> -u <url> -b '<body>'
        -m HTTP METHOD (put/post/get/delete/patch)
        -u URL 
        -b Body to send to the fetch and it should be JSON string in single quotes
    `)
}

doFetch();
