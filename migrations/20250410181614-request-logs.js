'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('request_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from_currency: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      to_currency: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      rate: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      result: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('request_logs')
  }
}
