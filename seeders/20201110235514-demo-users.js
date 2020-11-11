'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name:'test1',
        username: 'test1',
        password: 'test1'
      },
      {
        name: 'test2',
        username: 'test2',
        password: 'test2'
      },
      {
        name: 'test3',
        username: 'test3',
        password: 'test3'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
