'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('cliente', [{
      description: 'cliente',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'clinica',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'doença',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
