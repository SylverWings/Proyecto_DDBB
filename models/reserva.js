'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {    
    static associate(models) {
        this.belongsTo(models.Hotel, {
          foreignKey: "hotelId"
        });
        this.belongsTo(models.Cliente, {
          foreignKey: "dni"
        })
    }
  }
  Reserva.init({
    id: {
      type: DataTypes.STRING,
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