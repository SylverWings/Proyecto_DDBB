'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Reservas', [{
        reservaId: 1,
        importe: 60,
        fechaEntrada: new Date(),
        fechaSalida: new Date(),
        hotelId: 6,
        dni: "2740167296",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        reservaId: 2,
        importe: 100,
        fechaEntrada: new Date(),
        fechaSalida: new Date(),
        hotelId: 4,
        dni: "9048483611",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        reservaId: 3,
        importe: 150,
        fechaEntrada: new Date(),
        fechaSalida: new Date(),
        hotelId: 8,
        dni: "7100667836",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Reservas', null, {});
    
  }
};
