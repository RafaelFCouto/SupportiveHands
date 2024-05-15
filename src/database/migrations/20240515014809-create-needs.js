'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('needs', {
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER,
      },
      donation_type_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      institution_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      name:{
        type: Sequelize.STRING,
      },
      quantity:{
        type: Sequelize.INTEGER,
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


    await queryInterface.dropTable('needs');


  }
};
