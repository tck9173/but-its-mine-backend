'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        title:'Test 1',
        userId: 1,
        body: 'body',
        img: 'https://cdna.pcpartpicker.com/static/forever/images/userbuild/329711.14b6595b626472fe2916ebb7759465b4.1600.jpg'
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
