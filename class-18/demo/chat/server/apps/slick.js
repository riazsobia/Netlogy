'use strict';

// Using "slick" namespaceto seperate the slick connection from others
module.exports =(io)=> {
    // Slick NameSpace
    const slick = io.of('/slick');
    slick.on('connection', (socket)=> {
        console.log("Connected to Slick NameSpace", socket.id);
        let currentRoom = '';
        // when a user joins a new room, all of their chatting will happen there
        socket.on('join', room => {
            socket.leave(currentRoom);
            socket.join(room);
            currentRoom = room;
            console.log("joined room : ", room);
            // send a message to anyone connected to the non namespaced server
            io.emit('action', `Someone Joined Room : ${room}`);

            // this is sending on the socket ID, this goes to the sender
            slick.to(`${socket.id}`).emit('joined', room);
        });

        socket.on('message', payload=> {
            // everyone will recieve it including the sender
            slick.to(currentRoom).emit('message', payload);
        });
   
    });

    




}