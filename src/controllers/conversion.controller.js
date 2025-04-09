const { convertCurrency } = require('../services/conversion.service')

async function convert(req, res, next) {
  const { from, to, amount } = req.query
  try {
    const result = await convertCurrency(from, to, amount)
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  convert
}
