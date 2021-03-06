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
     await queryInterface.bulkInsert('Bookings', [{
      guest_id: 1,
      room_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      guest_id: 2,
      room_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      guest_id: 3,
      room_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      guest_id: 4,
      room_id: 4,
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
     await queryInterface.bulkDelete('Bookings', null, {});
  }
};
