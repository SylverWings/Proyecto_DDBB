'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Hotel', [{
      hotelId: 1,
      nombre: "Conn and Sons"
    }, {
      hotelId: 2,
      nombre: "Ritchie-Bruen"
    }, {
      hotelId: 3,
      nombre: "Grady, VonRueden and Abernathy"
    }, {
      hotelId: 4,
      nombre: "Schmitt, Renner and Halvorson"
    }, {
      hotelId: 5,
      nombre: "Williamson and Sons"
    }, {
      hotelId: 6,
      nombre: "Morissette Inc"
    }, {
      hotelId: 7,
      nombre: "McGlynn LLC"
    }, {
      hotelId: 8,
      nombre: "Flatley, Upton and Blanda"
    }, {
      hotelId: 9,
      nombre: "Green-Lockman"
    }, {
      hotelId: 10,
      nombre: "Lesch and Sons"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Hotel', null, {});
     
  }
};
