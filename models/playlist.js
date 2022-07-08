'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Playlist.init(
    {
      Artist: DataTypes.STRING,
      ArtistID: DataTypes.STRING,
      ArtistUrl: DataTypes.STRING,
      Album: DataTypes.STRING,
      AlbumID: DataTypes.STRING,
      AlbumUrl: DataTypes.STRING,
      AlbumImage: DataTypes.STRING,
      AlbumDate: DataTypes.STRING,
      Track: DataTypes.STRING,
      TrackID: DataTypes.STRING,
      TrackUrl: DataTypes.STRING,
      Duration: DataTypes.STRING,
      TrackPopularity: DataTypes.STRING,
      Tempo: DataTypes.STRING,
      Key: DataTypes.STRING,
      Energy: DataTypes.STRING,
      Acousticness: DataTypes.STRING,
      Danceability: DataTypes.STRING,
      Liveness: DataTypes.STRING,
      Loudness: DataTypes.STRING,
      Speechiness: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Playlist',
    }
  );
  return Playlist;
};
