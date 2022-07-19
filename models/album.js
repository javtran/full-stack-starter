'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Album.init(
    {
      Artist: DataTypes.STRING,
      Artist_ID: DataTypes.STRING,
      Album_Name: DataTypes.STRING,
      Image: DataTypes.STRING,
      URL: DataTypes.STRING,
      Album_Type: DataTypes.STRING,
      Track_Number: DataTypes.STRING,
      Release_Date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Album',
    }
  );
  return Album;
};
