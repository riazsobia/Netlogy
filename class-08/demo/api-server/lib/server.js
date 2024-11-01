'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const foodRoutes = require('../routes/food');

const server = express();
// Global Middleware
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

// registering my routes to my server. '/'
server.use(foodRoutes);
server.use('/api/v1', foodRoutes);

module.exports = {
    server: server, 
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        server.listen(PORT, ()=> {
            console.log(`Listening to ${PORT}`)
        });
    }
}