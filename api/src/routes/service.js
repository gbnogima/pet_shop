// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/service');

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.post('/name', controller.getByName);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/:id', controller.put);


module.exports = router;