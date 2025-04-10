const ApiError = require('./apiError')

class RequestTimeout extends ApiError {
  constructor(message = 'Request timeout') {
    super(408, message)
  }
}

module.exports = RequestTimeout
