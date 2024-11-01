'use strict';
// observers/subscribers
const eventsEmmiter = require('./events');

eventsEmmiter.on('save', payload=> logIt('save', payload));
eventsEmmiter.on('delete', payload=> logIt('delete', payload));
eventsEmmiter.on('update', payload=> logIt('update', payload));
eventsEmmiter.on('read', payload=> logIt('read', payload));

function logIt(event, payload) {
    let time = new Date();
    console.log({event, time, payload})
}