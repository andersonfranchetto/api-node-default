'use strict'

const express = require('express');

const app = express();
const router = express.Router();

//First route
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Default API",
        version: "0.0.1"
    })
})

app.use('/', route);

module.exports = app;