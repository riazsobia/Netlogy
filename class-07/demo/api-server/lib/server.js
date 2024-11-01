'use strict';

const express = require('express');
const logger = require('./logger.js');
const server = express();

// --------------------------- MIDDLEWARES ---------------------

// Global Middleware
server.use(express.json());
server.use(logger);
// server.listen(3000, ()=> console.log('listening ...'));

// Routes
server.get('/fruit', (req, res)=> {
    res.status(200).send('Hello from fruit route');
});

// this wont be applied, rules are applied from top to bottom
server.get('/fruit',  (req, res)=> {
    res.status(200).send('Good Bye!!!!');
});

function getBrowser(req, res, next) {
    console.log("req.headers['user-agent'] : ", req.headers['user-agent']);
    req.user_name = 'Rawan';
    req.browser = req.headers['user-agent'];
    next();
}

// Curried Middleware
function square(n) {
    return (req, res, next) => {
        if (typeof n !== 'number') {
            console.log("in the check this will pass error to next @@@@@ ")
            next("this is not a number!");
        } else {
            req.number = n * n;
            next();
        }
    }
}

server.get('/middleware', square(10) , (req, res)=> {
    console.log("middleware req.number >>> ", req.number)
    res.status(200).send('middlware url!!');
});

server.get('/middleware-2', square(20) , (req, res)=> {
    console.log("middleware-2 req.number >>> ", req.number)
    res.status(200).send('middleware 2 !! ');
});

server.get('/middleware-3', square('aaaa') , (req, res)=> {
    console.log("middleware-3 req.number >>> ", req.number)
    res.status(200).send('middleware 3 !! ');
});

server.get('/fruit-types', getBrowser, (req, res)=> {
    console.log("req.user_name : ", req.user_name);
    console.log("req.browser : ", req.browser);
    // req.query -> Object that has the query strings
    let output = {
        type: req.query.type
    }
    res.status(200).json(output);
});

server.get('/fruit-types/:type', (req, res)=> {
    console.log("req.user_name : ", req.user_name);
    console.log("req.browser : ", req.browser);
    // req.params -> Object that has the url params
    let output = {
        type: req.params.type
    }
    res.status(200).json(output);
});

server.post('/fruit', (req, res)=> {
    console.log("a new fruit is added!! ", req.body);
    res.status(201).send('Okay fruit is added');
});

server.put('/fruit', (req, res)=> {
    console.log("a fruit is updated!! ", req.body);
    throw new Error("asdasd");
    res.status(201).send('Okay fruit is updated');
});


// --------------------------- APIs ---------------------

let db = [];

server.get('/api/v1/food', () => {
    let count = db.length;
    let result = db;
    res.json({count, result});
});

server.get('/api/v1/food/:id', () => {
    let id = req.params.id; // string
    let record = db.filter((record) => record.id === parseInt(id));
    res.json(record[0]);
});

server.post('/api/v1/food', () => {
    // push to the array of db
});

server.put('/api/v1/food/:id', () => {
    // search for the record then update it
});

server.delete('/api/v1/food/:id', () => {
    let id = req.params.id;
    // filter it out of the array
});

function notFoundHandler(req, res, next) {
    res.status(404);
    res.json({error: 'Not Found!'});
    next();
}

// middleware -> going to be a global middleware by doing server.use()
function errorHandler(err, req, res, next) {
    res.status(500); // internal server error status code
    res.json({error: 'We have an issue we will fix it soon!'});
    next();
}

// not found handler : 404 
// server.use(notFoundHandler);
server.use('*', notFoundHandler);
// error handler Global middleware
server.use(errorHandler);

module.exports = {
    server: server,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        server.listen(PORT, ()=> console.log(`listening on ${PORT}`))
    }
}
