// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const repository = require('../repositories/order');
const guid = require('guid');
const authService = require('../services/authentication');

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
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        var result = await repository.getByCustomerId(data.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    // Procurar se há pedido em aberto com o ID do cliente
    // Se sim, atualizar
    // Se não, criar um novo
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        let result = await repository.getByCustomerId(data.id);

        if(result == ""){
            await repository.create({
                customerId: data.id,
                number: guid.raw().substring(0, 6),
                items: [req.body.items]
            });
            console.log(req.body.items);
        }
        else{
            result[0].items.push(req.body.items);
            await repository.update(result[0]["_id"], result[0].items);
        }
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.updateStatus = async(req, res, next) => {
    try {
        await repository.updateStatus(req.params.id);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};