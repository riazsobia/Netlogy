'use strict';

const express = require('express');
const router = express.Router();

router.get('/places/aqaba', (req, res)=> {
    console.log("Do we have zip ? ", req.body.zip)
    res.status(200).send(`this is Aqaba city! and zip = ${req.body.zip}`)
});

router.get('/places/:city', (req, res)=> {
    console.log("Do we have zip ? ", req.body.zip)
    res.status(200).send(`other city route ---> ${req.params.city} and zip = ${req.body.zip}`);
});

router.get('/animal/:city', (req, res)=> {
    console.log("Do we have zip ? ", req.body.zip)
    res.status(200).send(`aminal route -- and zip = ${req.body.zip}`);
});

// router middleware that will be triggered based on the city param in the route
router.param('city', getZip);

function getZip(req, res, next) {
    req.body.zip = Math.floor(Math.random() * 10000).toString().padStart(5, 0);
    next();
}

module.exports = router;