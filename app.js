const express = require('express');
const rootRouter = require('./routes');


const app = express();
const staticMW = express.static('pulic');
app.use(express.json());
app.use('/api', rootRouter);

module.exports = app;