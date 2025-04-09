const ApiError = require('./apiError')

class BadRequestError extends ApiError {
  constructor(message = 'Bad Request') {
    super(400, message)
  }
}

module.exports = BadRequestError
