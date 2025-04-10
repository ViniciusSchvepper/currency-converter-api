async function checkAllModelsSync(db) {
  const inconsistencias = []

  for (const modelName of Object.keys(db)) {
    if (!db[modelName].rawAttributes) continue // ignora objetos como sequelize ou Sequelize

    const model = db[modelName]
    const tableName = model.getTableName()
    const modelFields = Object.keys(model.rawAttributes)

    const dbFields = await db.sequelize
      .getQueryInterface()
      .describeTable(tableName)
    const dbFieldNames = Object.keys(dbFields)

    const missingInModel = dbFieldNames.filter((f) => !modelFields.includes(f))
    const missingInDB = modelFields.filter((f) => !dbFieldNames.includes(f))

    if (missingInModel.length || missingInDB.length) {
      inconsistencias.push({
        model: modelName,
        table: tableName,
        missingInModel,
        missingInDB
      })
    }
  }

  if (inconsistencias.length > 0) {
    let mensagem = 'Inconsistências encontradas entre models e tabelas:\n\n'
    inconsistencias.forEach(({ model, table, missingInModel, missingInDB }) => {
      mensagem += `Model: ${model} (tabela: ${table})\n`
      mensagem += `No banco, mas não na model: ${missingInModel.join(', ') || 'nenhum'}\n`
      mensagem += `Na model, mas não no banco: ${missingInDB.join(', ') || 'nenhum'}\n\n`
    })

    throw new Error(mensagem)
  }

  // eslint-disable-next-line no-console
  console.log('Todas as models estão sincronizadas com suas tabelas.')
}

module.exports = { checkAllModelsSync }
