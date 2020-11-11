'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        body:'comment1',
        userId: 1,
        postId: 1
      },
      {
        body:'comment2',
        userId: 1,
        postId: 1
      },
      {
        body:'comment3',
        userId: 1,
        postId: 1
      },
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
