const rateLimit = require('express-rate-limit')
const TooManyRequestsError = require('../errors/tooManyRequestsError')

const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW || '60', 10) * 1000
const maxRequests = parseInt(process.env.RATE_LIMIT || '10', 10)

const limiter = rateLimit({
  windowMs,
  max: maxRequests,
  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    const error = new TooManyRequestsError(
      `Limite de requisições excedido. Tente novamente em ${windowMs / 1000} segundos.`
    )

    return res.status(error.statusCode).json({
      message: error.message
    })
  }
})

module.exports = limiter
