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
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        date: {
            type: Date,
            required: false
        },
        petId: {
            type: String,
            required: true
        },
        serviceId: {
            type: String,
            required: true
        },
    }],
});

module.exports = mongoose.model('Scheduling', schema);