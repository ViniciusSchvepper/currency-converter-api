const express = require('express');
const routes = require('./routes/conversion.routes');
const ApiError = require('./errors/apiError');
const InternalServerError = require('./errors/internalServerError');

const app = express();

app.use(express.json());
app.use('/currency-converter', routes);

// 👇 middleware global de erro
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  const internalError = new InternalServerError();
  return next(new InternalServerError(internalError.message));
});

module.exports = app;