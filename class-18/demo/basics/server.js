'use strict';

const io = require('socket.io')(3000);

// Default Namespace  /
io.on('connection', (socket)=> {
    console.log( new Date().toLocaleTimeString() , "Connected Socket: ", socket.id)
    socket.on('sunrise', (payload)=> {
        io.emit('sunrise', payload);
    });
    socket.on('sunset', (payload)=> {
        io.emit('sunset', payload);
    });
});

// NameSpacing /weather
const weather = io.of('/weather'); // namespace 
weather.on('connection', (socket)=> {
    console.log( new Date().toLocaleTimeString() , "Weather Channel is connected : ", socket.id)
    socket.on('snow', (payload)=> {
        weather.emit('snow', payload);
    });
});

// Rooms 
// in my namespace localhost:3000/emergency
const emergency = io.of('/emergency');
emergency.on('connection', (socket)=> {
    console.log("EMERGENCY CHANNEL socket : ", socket.id);

    // WHen a user joins a new room, all of the chat to happen there
    socket.on('join', room=> {
        console.log("joined: ", room);
        socket.join(room);
    });

    socket.on('fire', (payload)=> {
        emergency.to('fireDepartment').emit('fire', payload)
    });

    socket.on('crime', (payload)=> {
        emergency.to('policeDepartment').emit('crime', payload)
    });
})