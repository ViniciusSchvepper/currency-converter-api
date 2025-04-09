const ApiError = require('./apiError');

class MethodNotAllowed extends ApiError {
  constructor(message = 'Method not allowed') {
    super(405, message);
  }
}

module.exports = MethodNotAllowed;
