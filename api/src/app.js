// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const md5 = require('md5');

const app = express();
const router = express.Router();

// Conexão com o mongodb local
mongoose.connect('mongodb://127.0.0.1:27017/api', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Models
const Product = require('./models/product');
const Service = require('./models/service');
const Order = require('./models/order');
const User = require('./models/user');
const Pet = require('./models/pet');
const Scheduling = require('./models/scheduling');

// Routes
const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');
const serviceRoute = require('./routes/service');
const orderRoute = require('./routes/order');
const userRoute = require('./routes/user');
const petRoute = require('./routes/pet');
const schedulingRoute = require('./routes/scheduling');


app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

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
app.use('/pets', petRoute);
app.use('/scheduling', schedulingRoute);

(async () => {
    try{
        var user = new User({
            name: 'admin',
            email: 'admin',
            password: md5('admin' + global.SALT_KEY),
            phone: 'admin',
            address: 'admin',
            role: 'admin'
        });
        await user.save();
        console.log('Admin criado.')
    } catch(e){
        console.log('Admin já existente.')
  }
})();

module.exports = app;
