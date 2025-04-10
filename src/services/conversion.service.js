const axios = require('axios')
const InternalServerError = require('../errors/internalServerError')

async function convertCurrency(from, to, amount) {
  const apiKey = process.env.API_KEY

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`

  try {
    const response = await axios.get(url)
    const { conversion_result, conversion_rate } = response.data

    return {
      result: conversion_result,
      rate: conversion_rate
    }
  } catch (err) {
    console.error('Erro ao chamar API externa:', err.message)
    throw new InternalServerError('Erro ao buscar taxa de câmbio externa')
  }
}

module.exports = {
  convertCurrency
}
