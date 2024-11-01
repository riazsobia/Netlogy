// add model routes for both Food and Books Collections
'use strict';
const express = require('express');
const books = require('../models/books/books-collection');
const food = require('../models/food/food-collection');

const router = express.Router();

router.get('/api/v1/:model', handleGetItems);

router.get('/api/v1/:model/:id', handleGetItems);

router.post('/api/v1/:model/', handlePostItem);

// trigger getModel middleware
router.param('model', getModel);

function getModel(req, res, next) {
    let model = req.params.model; 
    switch(model) {
        case "food":
            req.model = food;
            next();
            break;
        case "books": 
            req.model = books;
            next();
            break;
        default: 
            next('Invalid model !!!');
            // res.status(404).send('invalid route');
            break;
    }
}

function handleGetItems(req, res, next) {
    // get items or item
    req.model.get(req.params.id).then(results=> {
        let count = results.length;
        res.json({count, results});
    }).catch(next);
}

function handlePostItem(req, res, next) {
    req.model.create(req.body).then(result => {
        res.json(result);
    }).catch(next);
}


module.exports = router;