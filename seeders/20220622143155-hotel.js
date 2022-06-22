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
     await queryInterface.bulkInsert('Hotels', [{
      name: 'Radison',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Motel',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Park inn',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Herabora',
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
