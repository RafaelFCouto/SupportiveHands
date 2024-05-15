'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('donationstypes', {
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER,
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
    });
 

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('donationstypes');



  },
};
