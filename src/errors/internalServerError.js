const ApiError = require('./apiError')

class InternalServerError extends ApiError {
  constructor(message = 'Internal Server Error') {
    super(500, message)
  }
}

module.exports = InternalServerError
