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
      ArtistID: {
        type: Sequelize.STRING,
      },
      ArtistUrl: {
        type: Sequelize.STRING,
      },
      Album: {
        type: Sequelize.STRING,
      },
      AlbumID: {
        type: Sequelize.STRING,
      },
      AlbumUrl: {
        type: Sequelize.STRING,
      },
      AlbumImage: {
        type: Sequelize.STRING,
      },
      AlbumDate: {
        type: Sequelize.STRING,
      },
      Track: {
        type: Sequelize.STRING,
      },
      TrackID: {
        type: Sequelize.STRING,
      },
      Track: {
        type: Sequelize.STRING,
      },
      TrackID: {
        type: Sequelize.STRING,
      },
      TrackUrl: {
        type: Sequelize.STRING,
      },
      Duration: {
        type: Sequelize.STRING,
      },
      TrackPopularity: {
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
