'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('institutions', {
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER,
      },
      cnpj:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      phonenumber:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      beneficiaries:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      cep:{
        type: Sequelize.STRING,
      },
      street:{
        type: Sequelize.STRING,
      },
      number:{
        type: Sequelize.STRING,
      },
      vacancies:{
        type:Sequelize.INTEGER,
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

    await queryInterface.dropTable('institutions');



  },
};
