'use strict';

const mongoose = require('mongoose');

const history = mongoose.Schema({
    url: { type: String, required: true },
    method: { type: String, uppercase: true, enum: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'], required: true },
    body: { type: String }
});

module.exports = mongoose.model('history', history);