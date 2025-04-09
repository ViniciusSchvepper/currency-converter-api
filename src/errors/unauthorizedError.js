const ApiError = require('./apiError')

class Unauthorized extends ApiError {
  constructor(message = 'Unauthorized') {
    super(401, message)
  }
}

module.exports = Unauthorized
