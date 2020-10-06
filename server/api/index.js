
const express = require('express');
const helmet = require('helmet');
const moment = require('moment');
//const bodyParser = require('body-parser');

const app = express();

app.use(helmet());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.post('*', (req, res) => {
    //res.status(200).json({
    //result: {},
    res.set('Content-Type', 'text/html');
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.status(200).send(currentTime);



});

module.exports = app;