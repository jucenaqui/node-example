const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());

const routeUser = require('./route/user');
const routeArtist = require('./route/artist');



app.use('/api', routeUser);
app.use('/api', routeArtist);

module.exports = app;