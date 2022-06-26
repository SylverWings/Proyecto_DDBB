'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cliente',[{
      dni: "2313979059",
      nombre: "Candy Kenward",
      email: "ckenward0@tripod.com",
      telefono: "653 882 5371"
    }, {
      dni: "2740167296",
      nombre: "Demetria Mcmanaman",
      email: "dmcmanaman1@msn.com",
      telefono: "114 796 0306"
    }, {
      dni: "7278721725",
      nombre: "Vaughn Tander",
      email: "vtander2@delicious.com",
      telefono: "515 707 0167"
    }, {
      dni: "5948399648",
      nombre: "Gilligan Marczyk",
      email: "gmarczyk3@wp.com",
      telefono: "112 669 7595"
    }, {
      dni: "0042182565",
      nombre: "Milicent Barritt",
      email: "mbarritt4@sourceforge.net",
      telefono: "115 897 9063"
    }, {
      dni: "9048483611",
      nombre: "Helenelizabeth Sandcroft",
      email: "hsandcroft5@twitpic.com",
      telefono: "811 526 2770"
    }, {
      dni: "5917509557",
      nombre: "Julie Burdas",
      email: "jburdas6@usnews.com",
      telefono: "169 543 8091"
    }, {
      dni: "1762375664",
      nombre: "Alex Vanichkin",
      email: "avanichkin7@mapy.cz",
      telefono: "204 902 7328"
    }, {
      dni: "0986289418",
      nombre: "Lee Money",
      email: "lmoney8@paginegialle.it",
      telefono: "334 607 0784"
    }, {
      dni: "4504991926",
      nombre: "Baillie Pietri",
      email: "bpietri9@facebook.com",
      telefono: "845 874 1477"
    }, {
      dni: "7100667836",
      nombre: "Carlee Habbon",
      email: "chabbona@github.com",
      telefono: "645 337 5593"
    }, {
      dni: "6515416687",
      nombre: "Beatriz Knipe",
      email: "bknipeb@163.com",
      telefono: "469 672 9819"
    }, {
      dni: "1641044578",
      nombre: "Ethe Davson",
      email: "edavsonc@nps.gov",
      telefono: "268 490 8968"
    }, {
      dni: "6051953973",
      nombre: "Durand Croot",
      email: "dcrootd@theglobeandmail.com",
      telefono: "332 678 1639"
    }, {
      dni: "5723117440",
      nombre: "Cherida Chattington",
      email: "cchattingtone@tripadvisor.com",
      telefono: "612 505 4325"
    }, {
      dni: "4829072423",
      nombre: "Kahlil Lemonnier",
      email: "klemonnierf@census.gov",
      telefono: "816 526 7038"
    }, {
      dni: "0178734705",
      nombre: "Ganny Alton",
      email: "galtong@discuz.net",
      telefono: "243 811 4680"
    }, {
      dni: "2392244987",
      nombre: "Sandi Menure",
      email: "smenureh@imageshack.us",
      telefono: "188 169 3747"
    }, {
      dni: "1457751127",
      nombre: "Moses Acome",
      email: "macomei@google.com.hk",
      telefono: "770 919 5130"
    }, {
      dni: "9294813215",
      nombre: "Tine Milsap",
      email: "tmilsapj@sogou.com",
      telefono: "912 797 4924"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Cliente', null, {});
     
  }
};
