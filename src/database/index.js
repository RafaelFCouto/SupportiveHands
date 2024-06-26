const Sequelize = require('sequelize');

const Users = require('../apps/models/users');
const DonationTypes = require('../apps/models/donationTypes');
const Insitutions = require('../apps/models/instituition');
const Needs = require('../apps/models/needs');

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