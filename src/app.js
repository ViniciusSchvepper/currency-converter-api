const express = require('express')
const routes = require('./routes/conversion.routes')

const app = express()

app.use(express.json())
app.use('/currency-converter', routes)

module.exports = app