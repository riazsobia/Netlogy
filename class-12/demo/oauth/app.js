'use strict';

const express = require('express');
const users = require('./users');
const basicAuth = require('./basic-auth-middleware');
const oauth = require('./oauth-middleware');

const app = express();

app.use(express.json());

// add user {username: 'name', password: password}
// http request post :3000/signup + body (username, password)
app.post('/signup', (req, res, next)=> {
    users.save(req.body)
    .then(user=>{
        // res of API
        // create a token and send it back with the response
        let token = users.generateToken(user).then(result=> {
            res.status(200).send(result);
        });
    }).catch(e=> res.status(403).send("creating user error!"));
})

app.post('/signin', basicAuth, (req, res)=> {
    // now I have user and password(text) coming from the form.
    // in middleware : we can validate it if it's correct or not.
    res.status(200).send(req.token);
});

app.get('/oauth', oauth, (req, res)=> {
    console.log("send ---> req.token -->  ", req.token)
   res.status(200).send(req.token);
});



app.listen(3000, ()=> console.log("listening on port 3000"));