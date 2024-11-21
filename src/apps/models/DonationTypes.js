const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class DonationTypes extends Model{
    static init (sequelize){
        super.init(
            {
                name: Sequelize.STRING
            },
            {
                sequelize,
                modelName: 'DonationTypes',
                tableName: 'donationstypes',
            },
        );

        return this;
    }
}

module.exports=DonationTypes;