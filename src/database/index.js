const Sequelize = require('sequelize');

const Users = require('../apps/models/Users');
const DonationTypes = require('../apps/models/DonationTypes');
const Insitutions = require('../apps/models/instituition');
const Needs = require('../apps/models/Needs');

const models = [Users, DonationTypes, Insitutions, Needs];
const databaseConfig = require('../configs/db');



class Database {
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(databaseConfig);
        models
        .map((model)=>model.init(this.connection))
        .map((model)=>model.associate&& model.associate(this.connection.models));
    }
}


module.exports = new Database();