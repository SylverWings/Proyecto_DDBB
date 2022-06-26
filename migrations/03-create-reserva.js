'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      reservaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      importe: {
        type: Sequelize.INTEGER
      },
      fechaEntrada: {
        type: Sequelize.DATE
      },
      fechaSalida: {
        type: Sequelize.DATE
      }, 
      hotelId:{     
        allowNull: false,   
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Hotels",
          key: "hotelId",
          as: "hotelId"
        }
      },
      dni: {        
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: "CASCADE",
        references: {
          model: "Clientes",
          key: "dni",
          as: "dni"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};