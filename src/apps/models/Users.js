const Sequelize = require('sequelize');
const {Model} = require('sequelize');
const bcryptjs = require('bcryptjs');

class Users extends Model{
    static init (sequelize){
        super.init(
            {
                name:Sequelize.STRING,
                email:Sequelize.STRING,
                password_hash:Sequelize.STRING,
                password: Sequelize.VIRTUAL,
            },
            {
                sequelize,
            },
        );

        this.addHook('beforeSave', async(user)=>{

            if(user.password){
                user.password_hash = await bcryptjs.hash(user.password,8);
            }

        });
        return this;
    }

    async checkPassword(password){
        return bcryptjs.compareSync(password, this.password_hash);
    }
}

module.exports=Users;