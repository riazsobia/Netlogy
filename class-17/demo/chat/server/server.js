'use strict';

const net = require('net');
const port = process.env.PORT || 3000;
 
const server = net.createServer();
server.listen(port, ()=> console.log(`server is running on ${port}`));
// each connection is a socket connection
// to broadcast msgz to all clients I want to keep track of my socketConnections
// also I can end the connections when I want to.
let socketPool = {};
// we will listen to the connection event (internally EventEmmiter)
server.on('connection', (socket)=> {
    console.log("SERVER GOT A CONNECTION!");
    // console.log(socket);
    // keep track of socket objects and have them in socketPool
    // better to install uuid and use it to generate an ID
    // giving each client a unique ID
    const id = `Socket-${Math.random()}`;
    socketPool[id] = socket;
    // whenever a client sends data
    socket.on('data', (buffer)=> dispatchEvent(buffer));
    socket.on('error', (e)=> console.log('SOCKET ERROR', e));
    socket.on('end', (e)=> delete socketPool[id]);
});

function dispatchEvent(buffer) {
    // 1- format msg -> from buffer to string
    console.log("buffer >>>>>> ", buffer);
    let msg = JSON.parse(buffer.toString().trim());
    console.log("msg >>>> ", msg);
    // 2- send msg to all clients
    broadcast(msg)
}
function broadcast(message) {
    let payload = JSON.stringify(message);
    for (let socket in socketPool) {
        socketPool[socket].write(payload);
    }
}