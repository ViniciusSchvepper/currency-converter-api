'use strict'

module.exports = (sequelize, DataTypes) => {
  const RequestLog = sequelize.define(
    'RequestLog',
    {
      route: {
        type: DataTypes.STRING,
        allowNull: false
      },
      request: {
        type: DataTypes.JSON,
        allowNull: true
      },
      response: {
        type: DataTypes.JSON,
        allowNull: true
      },
      status_code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      }
    },
    {
      tableName: 'request_logs',
      timestamps: false
    }
  )

  return RequestLog
}
