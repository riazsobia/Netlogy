'use strict';

const eventsEmmiter = require('./events');

// Because we are making one application , we will run node app.js
require('./dashboard');
require('./logger');

// change the order of adding them to the pool, the log order will change.
// require('./logger');
// require('./dashboard');
eventsEmmiter.emit('delete', {id:1, name:'deleted_record'})
eventsEmmiter.emit('save', {id:345, name:'saved_record'})