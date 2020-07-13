// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Scheduling = mongoose.model('Scheduling');

exports.get = async(data) => {
    var res = await Scheduling.find({})
    return res;
}

exports.getByCustomerId = async(customerId) => {
    const res = await Scheduling
        .find({
            customerId: customerId
        });
    return res;
}

exports.create = async(data) => {
    var scheduling = new Scheduling(data);
    await scheduling.save();
}