const { convertCurrency } = require('../services/conversion.service');

async function convert(req, res) {
  const { from, to, amount } = req.query;

  try {
    const result = await convertCurrency(from, to, amount);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  convert,
};
