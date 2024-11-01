// define the events Pool 
'use strict';

const events = require('events');
// this is my events pool
const eventsEmitter = new events();
// we call this "singleton"
// we are exporting one instance and then importing it in our app
module.exports = eventsEmitter;