const express = require('express');
const router = express.Router();
const { convert } = require('../controllers/conversion.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { validateConversionParams } = require('../validators/conversion.validator')

router.get('/convert', authMiddleware, validateConversionParams, convert);

module.exports = router;
