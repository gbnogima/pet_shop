// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    breed: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Pet', schema);
