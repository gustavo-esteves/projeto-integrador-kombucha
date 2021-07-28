'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.INTEGER,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      cep: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'users',
      tableName: 'users'
    }
  )
  return users
};
