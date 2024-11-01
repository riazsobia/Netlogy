'use strict';

const dogConstructor = require('./constructor');
const dogClass = require('./classes');

console.log(' Dog Constructor ..');
const mydog = new dogConstructor("Beso");

console.log(mydog);

mydog.speak();

mydog.walk();

mydog.sing();
console.log('------------------------')

const lucy = new dogClass("Lucy");
console.log(lucy);

lucy.speak();

lucy.walk();

lucy.sing();

lucy.run();