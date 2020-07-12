// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'O título é obrigatório'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A descrição é obrigatória']
    },
    price: {
        type: Number,
        required: [true, 'O preço é obrigatório']
    },
});


module.exports = mongoose.model('Service', schema);