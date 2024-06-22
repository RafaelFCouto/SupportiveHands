'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
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
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password_hash:{
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

    await queryInterface.dropTable('users');
    await queryInterface.dropTable('donationstypes');
    await queryInterface.dropTable('needs');
    await queryInterface.dropTable('institutions');
    
  }
};
