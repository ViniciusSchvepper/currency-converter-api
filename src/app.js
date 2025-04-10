const express = require('express')
const routes = require('./routes/conversion.routes')
const ApiError = require('./errors/apiError')
const rateLimit = require('./middlewares/ratelimit.middleware')
const timeout = require('./middlewares/timeout.middleware')
const requestLog = require('./middlewares/logger.middleware')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/currency-converter', rateLimit, timeout, requestLog, routes)

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    message:
      err.response?.data?.message || err.message || 'Erro interno do servidor'
  })
})

module.exports = app
