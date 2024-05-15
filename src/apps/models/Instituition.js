const Sequelize = require('sequelize');
const {Model} = require('sequelize');


class Institution extends Model{
    static init (sequelize){
        super.init(
            {
                  cnpj:Sequelize.STRING,
                  name:Sequelize.STRING,
                  email:Sequelize.STRING,
                  phonenumber:Sequelize.STRING,
                  beneficiaries:Sequelize.STRING,
                  cep:Sequelize.STRING,
                  street:Sequelize.STRING,
                  number:Sequelize.STRING,
                  vacancies:Sequelize.INTEGER,
            },
            {
                sequelize,
                modelName: 'Institution',
                tableName: 'institutions', 
            },
        );
        
        return this;
    }

}


module.exports=Institution;