'use strict';

let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let db = {};

let users = {};

let SECRET = 'tobeornottobe';

let roles = {
    user: ['read'],
    editor: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete']
};
/*
hanaa : {
    username: hanaa,
    password: Hanaa1998 XX => we have to encrypt it
},
mohammed: {
    username: mohammed,
    password: mohammed1998 XX => do not save passwords as plain text
}
*/
users.save = async function(record) {
    //username & password
    if (!db[record.username]) {
        // hash our password before saving it!!
        record.password = await bcrypt.hash(record.password, 5);
        // Create a new user
        db[record.username] = record;
        return record;
    }

    return Promise.reject();

}

users.authenticateBasic = async function(user, pass) {
    console.log("user >> >", user)
    if (db[user]) {
        // compare the password text from the form with the encrypted password from DB
        return await bcrypt.compare(pass, db[user].password);
    }
    return Promise.reject();
}

users.generateToken = async function(user) { // pass user object
    let token = jwt.sign({
        username: user.username,
        capabilities: roles[user.role]
    }, SECRET);
    console.log("generateToken >> token : ", token);
    return token;
}

users.authenticateToken = async function(token) {
    // jwt.verify
    try {
        let tokenObject = await jwt.verify(token, SECRET);
        console.log("tokenObject : ", tokenObject);
        return db[tokenObject.username] ? Promise.resolve(tokenObject) : Promise.reject();
    } catch(err) {
        return Promise.reject();
    }
  
}

module.exports = users;