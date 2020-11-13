'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        body:'WOW! Such a clean build!',
        user_id: 1,
        post_id: 2
      },
      {
        body:'Great cable management, I am really jealous.',
        user_id: 2,
        post_id: 3
      },
      {
        body:'Tasteful RGB. Some builds go overboard',
        user_id: 3,
        post_id: 1
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
