// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async(data) => {
    var res = await User.find({})
    return res;
}

exports.create = async(data) => {
    var user = new User(data);
    await user.save();
}

exports.authenticate = async(data) => {
    const res = await User.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await User.findById(id);
    return res;
}

exports.update = async(id, data) => {
    await User
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address
            }
        });
}

exports.delete = async(id) => {
    await User
        .findOneAndRemove(id);
}