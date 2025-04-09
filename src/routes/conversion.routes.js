const express = require('express');
const router = express.Router();
const { convert } = require('../controllers/conversion.controller');

// const { conversionValidator } = require('...') // pode habilitar depois

router.get('/convert', convert);

module.exports = router;
