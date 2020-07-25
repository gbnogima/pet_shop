// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const authService = require('../services/authentication');

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/decode', controller.decodeToken);
router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;