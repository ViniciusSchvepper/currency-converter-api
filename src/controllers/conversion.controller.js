const { convertCurrency } = require('../services/conversion.service')
const { currencyLog } = require('../services/request-logs.service')

async function convert(req, res) {
  const { from, to, amount } = req.query

  try {
    const result = await convertCurrency(from, to, amount)

    await currencyLog({
      from_currency: from,
      to_currency: to,
      amount,
      rate: result.rate,
      result: result.result
    })

    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  convert
}
