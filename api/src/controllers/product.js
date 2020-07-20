// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const utils = require('../utils');

const repository = require('../repositories/product');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        const responseData = data.map((product) => { 
          product.img = utils.getImage(product.img);
          return product;
        });
        res.status(200).send(responseData);
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

exports.getByName = async(req, res, next) => {
    try {
        var data = await repository.getByName(req.body.search);
        const responseData = data.map((product) => { 
          product.img = utils.getImage(product.img);
          return product;
        });
        res.status(200).send(responseData);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    const imageId = utils.saveImage(req.body.img);
    try {
        await repository.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            amount: req.body.amount,
            sold: req.body.sold,
            img: imageId
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
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
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.params.id);
        await repository.update(req.params.id, req.body);
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



