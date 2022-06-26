'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {    
    static associate(models) {
        Clientes.hasMany(models.Reservas, {
          foreignKey: "dni"
        })
    }
  }
  Clientes.init({
    dni: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};