'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name:'test1',
        username: 'test1',
        password: '$2a$10$JTzVhrhvW37qQY6tAWBBIevNIHE/kmGqgejRKeRzYLzHqec2yqbyS'
      },
      {
        name: 'test2',
        username: 'test2',
        password: '$2a$10$JTzVhrhvW37qQY6tAWBBIevNIHE/kmGqgejRKeRzYLzHqec2yqbyS'
      },
      {
        name: 'test3',
        username: 'test3',
        password: '$2a$10$JTzVhrhvW37qQY6tAWBBIevNIHE/kmGqgejRKeRzYLzHqec2yqbyS'
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
