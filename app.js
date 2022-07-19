const express = require('express');

const app = express();

app.use(express.json());
//phones
app.get('/phones');

//users
app.post('/users');
app.patch('/users/:userId');
app.delete('/users/:userId');
app.get('/users/:userId/phones');

app.use((arr, req, res, next) => {});

module.exports = app;
