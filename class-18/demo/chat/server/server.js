'use strict';

const io = require('socket.io')(3000);

require('./apps/slick.js')(io);
// Global Operations - Default Namespace
io.on('connection', (socket)=> {
    console.log("Welcome to Global Connection ! ");
   
    socket.on("error", (payload)=> {
        io.emit("error", payload);
    });

    socket.on("action", (payload)=> {
        console.log("from server: payload: ", payload);
        io.emit("action", payload);
    });

})