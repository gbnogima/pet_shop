// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    var res = await Order.find({})
    return res;
}

exports.getByCustomerId = async(customerId) => {
    const res = await Order
        .find({
            customerId: customerId,
            status: 'created'
        });
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}

exports.update = async(id, items) => {
    await Order
        .findByIdAndUpdate(id, {
            $set: {
                items: items
            }
        });
}

exports.updateStatus = async(id) => {
    await Order
        .findByIdAndUpdate(id, {
            $set: {
                status: 'done'
            }
        });
}