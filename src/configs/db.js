const config = require('./default.json');

module.exports={
    dialect: config.DIALECT || 'mysql',
    host: config.HOST,
    username: config.DB_USERNAME,
    password:config.PASSWORD,
    database:config.DATABASE,
    port:config.DB_PORT,
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true
    },
};