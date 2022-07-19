const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use((arr, req, res, next) => {});

module.exports = app;
