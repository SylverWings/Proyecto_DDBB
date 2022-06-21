'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {    
    static associate(models) {
        this.belongsTo(models.hotel, {
          foreignKey: "hotelId"
        });
        this.belongsTo(models.cliente, {
          foreignKey: "dni"
        })
    }
  }
  Reserva.init({
    id: {
      type: STRING,
      primaryKey: true
    },
    importe: DataTypes.INTEGER,
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};