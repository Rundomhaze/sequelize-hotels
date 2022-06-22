'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Rooms', [{
      rate: 50,
      number: 111,
      hotel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      rate: 60,
      number: 122,
      hotel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      rate: 40,
      number: 100,
      hotel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      rate: 35,
      number: 110,
      hotel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      rate: 70,
      number: 99,
      hotel_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      rate: 75,
      number: 88,
      hotel_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      rate: 30,
      number: 55,
      hotel_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      rate: 35,
      number: 57,
      hotel_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Hotels', null, {});
  }
};
