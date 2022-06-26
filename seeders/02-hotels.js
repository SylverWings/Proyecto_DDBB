'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Hotels', [{
      hotelId: 1,
      nombre: "Conn and Sons",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 2,
      nombre: "Ritchie-Bruen",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 3,
      nombre: "Grady, VonRueden and Abernathy",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 4,
      nombre: "Schmitt, Renner and Halvorson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 5,
      nombre: "Williamson and Sons",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 6,
      nombre: "Morissette Inc",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 7,
      nombre: "McGlynn LLC",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 8,
      nombre: "Flatley, Upton and Blanda",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 9,
      nombre: "Green-Lockman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hotelId: 10,
      nombre: "Lesch and Sons",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Hotels', null, {});
     
  }
};
