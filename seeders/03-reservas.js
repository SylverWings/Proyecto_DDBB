'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Reserva', [{
        id: 01,
        importe: 60,
        fechaEntrada: "23/11/2023, 14:00h",
        fechaSalida: "25/11/2023, 12:00h",
        hotelId: 6,
        dni: "2740167296"     
      },{
        id: 02,
        importe: 100,
        fechaEntrada: "14/05/2023, 12:00h",
        fechaSalida: "21/05/2023, 13:00h",
        hotelId: 4,
        dni: "9048483611"     
      },{
        id: 03,
        importe: 150,
        fechaEntrada: "18/06/2023, 10:00h",
        fechaSalida: "20/06/2023, 15:00h",
        hotelId: 8,
        dni: "7100667836"     
      },{
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Reserva', null, {});
    
  }
};
