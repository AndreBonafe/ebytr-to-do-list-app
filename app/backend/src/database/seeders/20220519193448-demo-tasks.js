'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('tasks', [{
    task_name: 'Do the Dishes',
    status: 'done',
   },
   {
    task_name: 'Fix the Computer',
    status: 'pending',
   },
   {
    task_name: 'Go to the gym',
    status: 'in-progress',
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
