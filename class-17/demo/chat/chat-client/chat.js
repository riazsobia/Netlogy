'use strict';

const net = require('net');
const inquirer = require('inquirer');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

let name = '';
let messages = [];

client.connect(port, host, ()=> {
    console.log("CHAT CONNECTION MSG");
    // when the server sends us data 
    // INCOMING msgz
    client.on('data', (data)=> {
        const obj = JSON.parse(data);
        
        if(obj.event == "message")  {
            messages.push(obj.payload);
        }
        // Draw all msgz on the screen to look like a chat room
        console.clear();
        messages.forEach(msg=> console.log(msg));
        console.log(' ');
    });

    client.on('close', ()=> console.log("CHAT connection CLosed"));
    client.on('error', (e)=> console.log("CHAT Error", e));
});

function sendMessage(text) {
    let message = `[${name}] : ${text}` // [Rawan]: Good Morning!
    let event = JSON.stringify({event: 'message', payload: message });
    client.write(event);
}

async function getName() {
    console.clear();
    let nameInput = await inquirer.prompt([{'name': 'name', 'message': 'What is your name?'}])
    name = nameInput.name;
}

async function getInput() {
    // 1- send this msg to the server (write on socket connection)
    let input = await inquirer.prompt([{'name': 'text', 'message': ''}])
   sendMessage(input.text);
   // 2- before we get another input, send msg to server, then
   // you can now add another msg
    getInput();
}

getName();
getInput();
