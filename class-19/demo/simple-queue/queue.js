'use strict';

// server : queue.js : messaging server
const io = require('socket.io')(3000);

const queue = {
    hello: {}
};

io.on('connection', socket=> {
    console.log("socket : ", socket.id)
    socket.on('hello', payload=> {
        console.log("queue server hello!")
        let id = Math.random();
        queue.hello[id] = payload;
        socket.broadcast.emit('hello', {id, payload})
    });

    socket.on('received', message=> {
        delete queue.hello[message.id];
    });

    socket.on('getall', (payload)=> {
        console.log("get me all msgz ..")
        Object.keys(queue.hello).forEach(id => {
            console.log("sending from getall id : ", id)
            socket.emit('hello', {id: id, getall_payload: queue.hello[id] });
        });
    });
});

