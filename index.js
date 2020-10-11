const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());

const routeUser = require('./route/user');
const routeAlbum = require('./route/album');



app.use('/api', routeUser);
app.use('/api', routeAlbum);

module.exports = app;