// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

exports.get = async() => {
    const res = await Pet.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Pet
        .findById(id);
    return res;
}

exports.getByCustomerId = async(customerId) => {
    const res = await Pet
        .find({
            customerId: customerId
        });
    return res;
}

exports.create = async(data) => {
    var pet = new Pet(data);
    await pet.save();
}

exports.delete = async(id) => {
    await Pet
        .findOneAndRemove(id);
}

exports.update = async(id, data) => {
    await Pet
        .findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                race: req.body.race,
                age: req.body.age
            }
        });
}