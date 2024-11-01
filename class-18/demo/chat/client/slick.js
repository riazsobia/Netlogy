'use strict';

const inquirer = require('inquirer')
const io = require('socket.io-client');
const slick = io.connect('http://localhost:3000/slick');

let messages = [];
let channel = 'General';
let activeInput = false;
// channel == room 
slick.emit('join', channel);

slick.on('joined', (joinedChannel)=> {
    channel = joinedChannel;
});


slick.on('message', (payload)=> {
    console.clear();
    messages.push(payload);
    messages.forEach(message=> console.log(message));
    console.log(' ');
    beSlick();
});


async function beSlick() {
    // 
    if (activeInput) return;
    activeInput = true;
    const response = await inquirer.prompt([
        {
            name: 'text',
            message: `----------------------------\n ${channel}`
        }
    ]);
    // join random
    // Hello Everyone! -> a regular msg it will go to default 
    let command = response.text.toLowerCase().split(" ")[0];
    console.log("command --->", command);
    switch(command) {
        case 'join': 
            let room = response.text.split(" ")[1] || channel;
            activeInput = false;
            slick.emit('join', room);
            channel = room;
            beSlick();
            break;
        case 'quit':
            process.exit();
            break;
        default:
            activeInput = false;
            slick.emit('message', response.text);
            beSlick();
            break;
    }
}

beSlick();