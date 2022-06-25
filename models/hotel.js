'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    
    static associate(models) {
      this.hasMany(models.reserva, {
        foreignKey: "hotelId"
      })
    }
  }
  Hotel.init({
    hotelId: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};