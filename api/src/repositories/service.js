// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Service = mongoose.model('Service');

exports.get = async() => {
    const res = await Service.find({}, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Service
        .findOne({
            slug: slug
        }, 'title description price slug');
    return res;
}

exports.getById = async(id) => {
    const res = await Service
        .findById(id, 'title description price slug');
    return res;
}

exports.getPartnerHours = async(data) => {
    const res = await Service
        .find({
            hours: { $in: data.hours },
            partner: { "$regex": data.partner, "$options": "i" }
        }, 'title partner');
    return res;
}

exports.create = async(data) => {
    var service = new Service(data);
    await service.save();
}

exports.update = async(id, data) => {
    await Service
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = async(id) => {
    await Service
        .findOneAndRemove(id);
}