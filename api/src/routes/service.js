// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/service');

router.get('/', controller.get);
router.get('/slug/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/partner-hours', controller.getPartnerHours);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;