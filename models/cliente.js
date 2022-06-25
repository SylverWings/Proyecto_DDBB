'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {    
    static associate(models) {
        this.hasMany(models.reserva, {
          foreignKey: "id"
        })
    }
  }
  Cliente.init({
    dni: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};