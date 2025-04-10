const { CurrencyLog } = require('../../models')

async function currencyLog({
  from_currency,
  to_currency,
  amount,
  rate,
  result
}) {
  try {
    await CurrencyLog.create({
      from_currency,
      to_currency,
      amount,
      rate,
      result
    })
  } catch (err) {
    throw new Error('Erro ao salvar requisição: ', err)
  }
}

module.exports = { currencyLog }
