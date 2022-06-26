'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotels extends Model {
    
    static associate(models) {
      this.hasMany(models.Reservas, {
        foreignKey: "hotelId"      
      })
    }
  }
  Hotels.init({
    hotelId: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotels',
  });
  return Hotels;
};