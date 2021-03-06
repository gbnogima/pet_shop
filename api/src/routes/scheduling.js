// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/scheduling');

router.get('/', controller.get);
router.get('/customer-id/:id', controller.getByCustomerId);
router.get('/service/:serviceId', controller.getAvailableSlots);
router.post('/', controller.post);

module.exports = router;
