'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('request_logs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      route: {
        type: Sequelize.STRING,
        allowNull: false
      },
      request: {
        type: Sequelize.JSON,
        allowNull: true
      },
      response: {
        type: Sequelize.JSON,
        allowNull: true
      },
      status_code: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('request_logs')
  }
}
