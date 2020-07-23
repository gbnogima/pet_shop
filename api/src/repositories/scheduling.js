// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const mongoose = require('mongoose');
const Scheduling = mongoose.model('Scheduling');
const endOfDay = require('date-fns/endOfDay');
const startOfDay = require('date-fns/startOfDay')


exports.get = async(data) => {
    var res = await Scheduling.find({})
    return res;
}

exports.getByCustomerId = async(customerId) => {
    let res = await Scheduling
        .find({
            customer: new mongoose.Types.ObjectId(customerId)
        }).populate('pet').populate('service').exec();
    return res;
}

exports.getByServiceAndDate = async(serviceId, date) => {
  console.log(serviceId);
  let res = await Scheduling
      .find({
        service: new mongoose.Types.ObjectId(serviceId),
        date: {
          $gte: startOfDay(date),
          $lte: endOfDay(date)
        }
      });
  return res;
}

exports.create = async(data) => {
    var scheduling = new Scheduling(data);
    await scheduling.save();
}
