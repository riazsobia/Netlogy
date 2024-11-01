'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server');
// add in .env
const MONGODB_URI = 'mongodb://localhost:27017/class8-food';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

server.start();