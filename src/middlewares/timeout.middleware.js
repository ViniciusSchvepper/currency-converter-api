const RequestTimeout = require('../errors/requestTimeoutError')

const timeout = parseInt(process.env.TIMEOUT || '10', 10) * 1000

function timeoutMiddleware(req, res, next) {
  let finished = false

  const timer = setTimeout(() => {
    if (!finished) {
      finished = true
      next(new RequestTimeout('A requisição excedeu o tempo limite.'))
    }
  }, timeout)

  res.on('finish', () => {
    finished = true
    clearTimeout(timer)
  })

  res.on('close', () => {
    finished = true
    clearTimeout(timer)
  })

  next()
}

module.exports = timeoutMiddleware
