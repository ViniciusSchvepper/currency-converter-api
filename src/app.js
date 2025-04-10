const express = require('express')
const routes = require('./routes/conversion.routes')
const ApiError = require('./errors/apiError')
const rateLimit = require('./middlewares/ratelimit.middleware')
const timeout = require('./middlewares/timeout.middleware')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/currency-converter', rateLimit, timeout, routes)

const tete = '3' // TODO: colocar rule para alegar erro
console.log('teste') // TODO: colocar rule para alegar erro

app.use((err, req, res) => {
  console.error('Erro tratado:', err)

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    message: err.message || 'Erro interno do servidor'
  })
})

module.exports = app
