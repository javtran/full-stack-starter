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
      Artist_ID: DataTypes.STRING,
      Artist_URL: DataTypes.STRING,
      Album: DataTypes.STRING,
      Album_ID: DataTypes.STRING,
      Album_URL: DataTypes.STRING,
      Album_Image: DataTypes.STRING,
      Album_Date: DataTypes.STRING,
      Track: DataTypes.STRING,
      Track_ID: DataTypes.STRING,
      Track_URL: DataTypes.STRING,
      Duration: DataTypes.STRING,
      Track_Popularity: DataTypes.STRING,
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
