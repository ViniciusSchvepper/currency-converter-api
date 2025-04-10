const UnauthorizedError = require('../errors/unauthorizedError')
const ForbiddenError = require('../errors/forbiddenError')

function authMiddleware(req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return next(new UnauthorizedError('Token não fornecido.'))
  }

  if (token !== process.env.API_KEY) {
    return next(
      new ForbiddenError(`Token '${req.headers.authorization}' inválido.`)
    )
  }

  return next()
}

module.exports = authMiddleware
