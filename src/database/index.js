const Sequelize = require('sequelize');
const Users = require('../apps/models/Users');
const DonationTypes = require('../apps/models/DonationTypes');
const Insitutions = require('../apps/models/Instituition');
const Needs = require('../apps/models/Needs');
const databaseConfig = require('../configs/db');
const models = [Users, DonationTypes, Insitutions, Needs];

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
    
    getConnection() {
        return this.connection;
    }
}

module.exports = new Database();