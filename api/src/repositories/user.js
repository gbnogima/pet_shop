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