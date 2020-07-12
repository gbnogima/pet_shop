// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conexão com o mongodb local
mongoose.connect('mongodb://127.0.0.1:27017/api', { useNewUrlParser: true, useUnifiedTopology: true });

// Models
const Product = require('./models/product');
const Service = require('./models/service');
const Order = require('./models/order');
const User = require('./models/user');

// Routes
const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');
const serviceRoute = require('./routes/service');
const orderRoute = require('./routes/order');
const userRoute = require('./routes/user');


app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/services', serviceRoute);
app.use('/orders', orderRoute);
app.use('/users', userRoute);


module.exports = app;