'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Playlists', {
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
      Artist_URL: {
        type: Sequelize.STRING,
      },
      Album: {
        type: Sequelize.STRING,
      },
      Album_ID: {
        type: Sequelize.STRING,
      },
      Album_URL: {
        type: Sequelize.STRING,
      },
      Album_Image: {
        type: Sequelize.STRING,
      },
      Album_Date: {
        type: Sequelize.STRING,
      },
      Track: {
        type: Sequelize.STRING,
      },
      Track_ID: {
        type: Sequelize.STRING,
      },
      Track: {
        type: Sequelize.STRING,
      },
      Track_ID: {
        type: Sequelize.STRING,
      },
      Track_URL: {
        type: Sequelize.STRING,
      },
      Duration: {
        type: Sequelize.STRING,
      },
      Track_Popularity: {
        type: Sequelize.STRING,
      },
      Tempo: {
        type: Sequelize.STRING,
      },
      Key: {
        type: Sequelize.STRING,
      },
      Energy: {
        type: Sequelize.STRING,
      },
      Acousticness: {
        type: Sequelize.STRING,
      },
      Danceability: {
        type: Sequelize.STRING,
      },
      Liveness: {
        type: Sequelize.STRING,
      },
      Loudness: {
        type: Sequelize.STRING,
      },
      Speechiness: {
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
    await queryInterface.dropTable('Playlists');
  },
};
