const bcryptjs = require('bcryptjs');
const Users = require('../models/users');
const { where } = require('sequelize');



class UserServices
{

    async verifyUserByEmail (email){

        console.log(email)

        const user = await Users.findOne({where:{email:email}});

        
        if (user) {
            throw new Error('User already created');
        }
        

        return user;
    }    
    
    async verifyUserById (userId){

        const user = await Users.findOne({where:{id:userId}});

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }



    async createUser(userData){

        
        const verify = this.verifyUserByEmail(userData.email);

        const user = await Users.create(userData);

        


    }

    async updateUser(userData, userId){
        const {name,old_password, new_password, confirm_new_password} = userData;

        

        const user = await this.verifyUserById(userId);

        let encryptedPassword = '';

        if(old_password){
            if(!await user.checkPassword(old_password)){
                throw new Error('Old password does not match!');
            }

            if(!new_password || !confirm_new_password){
                throw new Error('We need a new password and confirm new password');
            }


            if(new_password !== confirm_new_password){
                throw new Error('New Password and confirm new password does not match');
            }


            encryptedPassword = await bcryptjs.hash(new_password,8);


            const update = await Users.update(
                {

                    name: name || user.name,
                    password_hash: encryptedPassword|| user.password_hash

                },
                {
                    where: {
                        id:user.id,
                    }
                }

 
            );

            if(!update){
                throw new Error('Failed in update user');
            }

        }
    }

    async deleteUser(userData, userId){


        const user = await this.verifyUserById(userId)

        if(!user){
            throw new Error('User Not Found');
        }

        const deleted = await Users.destroy({
            where:{
                id:userId,
            },
        });

        if(!deleted){
            throw new Error('Failed in delete user');
        }

        

    }

    async userProfile(userData, userId){

        const user= await Users.findOne({
            attributes:['id', 'name', 'email'],
            where:{
                id:userId,
            },
        });

        


        if(!user){
            throw new Error('User Not Found');
        }

        return user;




    }

}

module.exports = new UserServices();