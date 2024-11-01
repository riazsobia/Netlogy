'use strict';

const events = require('events');
const eventEmitter = new events();

// Register event listeners 
eventEmitter.on('save', handleSave);
eventEmitter.on('update', payload=> logIt('update', payload));
eventEmitter.on('delete', payload=> logIt('delete', payload));
eventEmitter.on('read', payload=> logIt('read', payload));

function handleSave(payload) {
    console.log(`Record ${payload.id} was saved!`)
}

// Shouting out loud
eventEmitter.emit('read', {id: 1, name: 'TestName'});
eventEmitter.emit('update', {id: 2, name: 'TestName'});
eventEmitter.emit('delete', {id: 10, name: 'TestName'});
eventEmitter.emit('save', {id: 22, name: 'TestName'});

function logIt(event, payload) {
    let time = new Date();
    console.log({event, time, payload});
}