// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

router.get('/', controller.get);
router.put('/id/:id', controller.updateStatus);
router.get('/customer-id/', controller.getByCustomerId);
router.post('/', controller.post);

module.exports = router;