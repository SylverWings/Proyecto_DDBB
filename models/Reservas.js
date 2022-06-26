'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {    
    static associate(models) {
        this.belongsTo(models.Hotels, {
          foreignKey: "hotelId",          
          onDelete: "CASCADE"
        });
        this.belongsTo(models.Clientes, {
          foreignKey: "dni",
          onDelete: "CASCADE"
        })
    }
  }
  Reservas.init({
    reservaId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    importe: DataTypes.INTEGER,
    hotelId: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};