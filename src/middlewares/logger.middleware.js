const { RequestLog } = require('../../models')

function requestLog(req, res, next) {
  const chunks = []

  const originalWrite = res.write
  const originalEnd = res.end

  res.write = function (chunk, ...args) {
    chunks.push(Buffer.from(chunk))
    originalWrite.apply(res, [chunk, ...args])
  }

  res.end = function (chunk, ...args) {
    if (chunk) chunks.push(Buffer.from(chunk))

    const body = Buffer.concat(chunks).toString('utf8')

    try {
      RequestLog.create({
        route: req.originalUrl,
        request: req.method === 'GET' ? req.query : req.body,
        response: safeJson(body),
        status_code: res.statusCode
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Erro ao salvar log de requisição:', err)
      })
    } catch (err) {
      throw new Error('Erro inesperado ao tentar logar request:', err)
    }

    originalEnd.apply(res, [chunk, ...args])
  }

  next()
}

function safeJson(str) {
  try {
    return JSON.parse(str)
  } catch {
    return str
  }
}

module.exports = requestLog
