'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        body:'WOW! Such a clean build!',
        userId: 1,
        postId: 2
      },
      {
        body:'Great cable management, I am really jealous.',
        userId: 2,
        postId: 3
      },
      {
        body:'Tasteful RGB. Some builds go overboard',
        userId: 3,
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
