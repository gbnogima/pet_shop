// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const repository = require('../repositories/scheduling');
const guid = require('guid');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByCustomerId = async(req, res, next) => {
    try {
        var data = await repository.getByCustomerId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getAvailableSlots = async(req, res, next) => {
  const currentDate = new Date(req.query.date);
  let availableSlots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  try {
    const data = await repository.getByServiceAndDate(req.params.serviceId, currentDate);
    data.forEach((scheduling) => {
      const index = availableSlots.indexOf(scheduling.date.getHours());
      availableSlots.splice(index, 1);
    });
    res.status(200).send(availableSlots);
  } catch(e) {
    console.log(e);
    res.status(500).send({
        message: 'Falha ao processar sua requisição'
    });
  }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            customer: req.body.customerId,
            date: req.body.date,
            pet: req.body.petId,
            service: req.body.serviceId
        });
        res.status(201).send({
            message: 'Agendamento cadastrado'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
