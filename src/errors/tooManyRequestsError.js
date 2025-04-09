const ApiError = require('./apiError')

class TooManyRequests extends ApiError {
  constructor(message = 'Too many requests') {
    super(429, message)
  }
}

module.exports = TooManyRequests
