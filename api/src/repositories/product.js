// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.getByName = async(search) => {
    const res = await Product
        .find({
            name: { "$regex": search, "$options": "i" }
        });
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

exports.delete = async(id) => {
    await Product
        .findByIdAndRemove(id);
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                description: data.description,
                price: data.price,
                amount: data.amount,
                sold: data.sold
            }
        });
}