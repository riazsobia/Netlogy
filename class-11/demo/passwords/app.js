'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

let string = 'hanaauser:Hanaa1998';
let encoded = base64.encode(string);
let decoded = base64.decode(encoded);
console.log("string ===> ", string);
console.log("encoded ===> ", encoded);
console.log("decoded ===> ", decoded);

console.log("----------------HASH------------------------")

let password = 'Hanaa1998';
let comp = 5;

encrypt(password, comp);

async function encrypt(pwd, complexity) {
    let hashed = await bcrypt.hash(pwd, complexity);
    console.log("pwd ----> ", pwd);
    console.log("hashed ----> ", hashed);

    let result1 = '$2b$05$moEWRpbjVrQ5XTmMa1Tlz.IUELuOnYDOqEQGWsCwNoYXbAg7trKn.';
    
    console.log("result1 >>>>", result1);
    let isValid1 = await bcrypt.compare(pwd, hashed);
    console.log("isValid1 ------> ", isValid1);
    let isValid2 = await bcrypt.compare(pwd, result1);
    console.log("isValid2 ------> ", isValid2);

    let changedResult = '$2b$05$moEWRpbjVrQ6XTmMa1Tlz.IUELuOnYDOqEQGWsCwNoYXbAg7trKn.';
    let isValid3 = await bcrypt.compare(pwd, changedResult);
    console.log("isValid3 ------> ", isValid3);


}