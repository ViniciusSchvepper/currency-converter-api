require('dotenv').config()

const app = require('./app')
const db = require('../models')
const { checkAllModelsSync } = require('./utils/check-model')

const port = process.env.PORT || 3000

async function startServer() {
  try {
    await db.sequelize.authenticate()
    await checkAllModelsSync(db)

    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${port}`)
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Erro ao iniciar a aplicação:\n' + err.message)
    process.exit(1)
  }
}

startServer()
