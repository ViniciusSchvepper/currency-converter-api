'use strict'

module.exports = (sequelize, DataTypes) => {
  const RequestLog = sequelize.define(
    'RequestLog',
    {
      from_currency: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      to_currency: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      rate: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      result: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: 'request_logs',
      timestamps: false
    }
  )

  return RequestLog
}
