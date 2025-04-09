const ApiError = require('./apiError');

class BadRequestError extends ApiError {
  constructor(message = 'Forbidden') {
    super(403, message);
  }
}

module.exports = BadRequestError;
