const ApiError = require('./apiError');

class Forbidden extends ApiError {
  constructor(message = 'Forbidden') {
    super(403, message);
  }
}

module.exports = Forbidden;
