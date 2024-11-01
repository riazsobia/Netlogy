'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const paramRouter = require('../router/param.js');
const v1Router = require('../router/v1.js')

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(paramRouter);
app.use(v1Router);

module.exports = {
    app: app,
    start: port=> {
        let PORT = port || process.env.PORT ||3000;
        app.listen(PORT, ()=> {
            console.log(`Listening on ${PORT}`);
        })
    }
}
