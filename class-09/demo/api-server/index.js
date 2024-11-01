'use strict';

const mongoose = require('mongoose');
const app = require('./lib/server.js');

// put in .env
const MONGODB_URI = 'mongodb://localhost:27017/class-09-db';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.start();