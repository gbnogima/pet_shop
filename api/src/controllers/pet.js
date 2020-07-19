// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const utils = require('../utils');

const repository = require('../repositories/pet');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send({...data, img: utils.getImage(data.img)});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByCustomerId = async(req, res, next) => {
    try {
        var pets = await repository.getByCustomerId(req.params.id);
        const responseData = pets.map((pet) => { 
          pet.img = utils.getImage(pet.img);
          return pet;
        });
        res.status(200).send(responseData);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    const imageId = utils.saveImage(req.body.img);
    try {
        await repository.create({
            customerId: req.body.customerId,
            name: req.body.name,
            race: req.body.race,
            age: req.body.age,
            img: imageId,
            breed: req.body.breed,
            weight: req.body.weight,
        });
        res.status(201).send({
            message: 'Pet cadastrado.'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Pet removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Pet atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};



