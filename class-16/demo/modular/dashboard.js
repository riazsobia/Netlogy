'use strict';

const eventsEmmiter = require('./events');

// we will observe the save event
eventsEmmiter.on('save', handleSave);

function handleSave(payload) {
    console.log(`Record ${payload.id} was saved !`)
}