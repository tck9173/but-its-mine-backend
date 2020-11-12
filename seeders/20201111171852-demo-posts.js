'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        title:'Custom Water Cooling EKWB / RTX 3090 FE / i9 10900K',
        userId: 1,
        body: 'Hardware: • Intel Core i9-10900K • ASUS ROG Maximus XII Formula Z490 • NVIDIA GeForce RTX 3090 Founders Edition Graphics Card • Corsair Vengeance RGB Pro 128GB (4x32GB) DDR4 3200',
        img: 'https://cdna.pcpartpicker.com/static/forever/images/userbuild/329711.14b6595b626472fe2916ebb7759465b4.1600.jpg'
      },
      {
        title: 'First build ever after 15 years without touching a PC',
        userId: 2,
        body: "I used to tinker with computers when I was young (like 12). And now after 20 years, I got back to it and built this rig after watching countless PC building videos on YouTube. I always wanted to build myself a PC but didn't have the time to do it.",
        img: 'https://cdna.pcpartpicker.com/static/forever/images/userbuild/331395.66eb97e0dcac4aa55bc556675bca6391.1600.jpg'
      },
      {
        title:"Atlantis - Black and White Atx Build",
        userId: 3,
        body: "I'm several months late posting my first completed build, and the release of the RTX 3000 series GPUs renders this build somewhat poor value for the performance. That being said, I'm super happy with all my part selections, performance, and appearance.",
        img: "https://cdna.pcpartpicker.com/static/forever/images/userbuild/331372.69772902c068090422be1fa194c912d8.1600.jpg"
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
