const axios = require('axios')

async function convertCurrency(from, to, amount) {
    const apiKey = process.env.API_KEY

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`

    try {
        const response = await axios.get(url)
        const {conversion_result, conversion_rate} = response.data

        return {
            result: conversion_result,
            rate: conversion_rate
        }
    } catch(error) {
        throw new Error(`Erro ao obter taxa de câmbio da API: ${error}`)
    }
}

module.exports = {
    convertCurrency
}