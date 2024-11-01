'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000');

let counter = 0;
setInterval(()=> {
    console.log("sending love")
    socket.emit('hello', `Hello ${counter++}`);
}, 1000);
