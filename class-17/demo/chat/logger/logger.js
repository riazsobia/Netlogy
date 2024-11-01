'use strict';

const net = require('net');
const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
client.connect(port, host, ()=> {
    console.log("LOGGER CONNECT MSG");
    client.on('data', (data)=> {
        const obj = JSON.parse(data);
        console.log(new Date().toLocaleString(), obj);
    });
    client.on('close', ()=> console.log("Logger connection CLosed"));
    client.on('error', (e)=> console.log("Logger Error", e));
});

