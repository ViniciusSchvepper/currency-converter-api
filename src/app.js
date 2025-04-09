const express = require('express')
const routes = require('./routes/conversion.routes')
const ApiError = require('./errors/apiError')
const InternalServerError = require('./errors/internalServerError')
const rateLimit = require('./middlewares/ratelimit.middleware')
const timeout = require('./middlewares/timeout.middleware')

const app = express()

app.use(express.json())
app.use('/currency-converter', rateLimit, timeout, routes)

app.use((err, req, res) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  const internalError = new InternalServerError()
  return res
    .status(internalError.statusCode)
    .json({ message: 'Erro interno de servidor.' })
})

module.exports = app
