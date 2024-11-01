'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.emit('sunrise');

// Connect to Server Channel
const weather = io.connect('http://localhost:3000/weather');
weather.emit('snow');

const emergency = io.connect('http://localhost:3000/emergency');

emergency.emit('crime', 'Break-In in some address... ');
emergency.emit('fire', 'something is on Fire !!!!');
