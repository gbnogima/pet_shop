// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const repository = require('../repositories/service');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getByName = async(req, res, next) => {
    try {
        var data = await repository.getByName(req.body.search);
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        });
        res.status(201).send({
            message: 'Serviço cadastrado'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Serviço atualizado'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Serviço removido'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};

