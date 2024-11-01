const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('sunrise', (payload)=> {
    console.log("TIME TO WAKE UP!!!")
});

socket.on('sunset', (payload)=> {
    console.log("Go TO BED.....");
});