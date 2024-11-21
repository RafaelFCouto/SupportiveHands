const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class Needs extends Model{
    static init (sequelize){
        super.init(
            {
                donation_type_id: Sequelize.INTEGER,
                institution_id: Sequelize.INTEGER,
                quantity: Sequelize.INTEGER,
                name: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'Needs',
                tableName: 'needs',
            },
        );

        return this;
    }
    static associate(models){
        this.belongsTo(models.Institution,{foreignKey: 'institution_id', as: 'institution'});
        this.belongsTo(models.DonationTypes,{foreignKey: 'donation_type_id', as: 'donationType'});
    }
}

module.exports=Needs;