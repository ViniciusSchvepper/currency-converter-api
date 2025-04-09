const { check, validationResult } = require('express-validator')
const constants = require('../constants')
const BadRequestError = require('../errors/badRequestError')

const validateConversionParams = [
    check('from')
        .notEmpty().withMessage('Parâmetro "from" é obrigatório.')
        .isString().withMessage('Parâmetro "from" deve ser uma string.')
        .isIn(constants.CURRENCY_CODES).withMessage(`Parâmetro "from" deve ser uma das seguintes moedas: ${constants.CURRENCY_CODES.join(', ')}`),

    check('to')
        .notEmpty().withMessage('Parâmetro "to" é obrigatório.')
        .isString().withMessage('Parâmetro "to" deve ser uma string.')
        .isIn(constants.CURRENCY_CODES).withMessage(`Parâmetro "to" deve ser uma das seguintes moedas: ${constants.CURRENCY_CODES.join(', ')}`),

    
    check('amount')
        .notEmpty().withMessage('Parâmetro "amount" é obrigatório.')
        .isNumeric().withMessage('Parâmetro "amount" deve ser númerico.'),

    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            const messages = errors.array().map((e) => e.msg).join(', ')
            return next(new BadRequestError(messages))
        }
        return next()
    }
]

module.exports = {
    validateConversionParams
}