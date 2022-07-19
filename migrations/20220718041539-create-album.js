'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Artist: {
        type: Sequelize.STRING,
      },
      Artist_ID: {
        type: Sequelize.STRING,
      },
      Album_Name: {
        type: Sequelize.STRING,
      },
      Image: {
        type: Sequelize.STRING,
      },
      URL: {
        type: Sequelize.STRING,
      },
      Album_Type: {
        type: Sequelize.STRING,
      },
      Track_Number: {
        type: Sequelize.STRING,
      },
      Release_Date: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Albums');
  },
};
