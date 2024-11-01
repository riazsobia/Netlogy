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

HTTP.fetch(options);