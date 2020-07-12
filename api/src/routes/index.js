// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Exercício 7",
        alunos: "Alysson Rogerio Oliveira (9771355), Guilherme Brunassi Nogima (9771629), Leonardo Akel Daher (9771682)"
    });
});

module.exports = router;