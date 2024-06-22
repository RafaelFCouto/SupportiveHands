
const UserService = require('../services/UserServices');


class UserController{

    async listUser(req, res){
        try {

            const userId = req.userId;

            const user = await UserService.userProfile(req.body, userId);

            res.status(200).json({ message: 'User datas', user: { id: user.id, name:user.name ,email: user.email } });

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async createUser(req,res){
        try {

            

            const createUser = await UserService.createUser(req.body);
            const user = req.body;

            res.status(200).json({ message: 'User Created', user: {email: user.email } });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req, res){
        try {

            const userId = req.userId;
            console.log(userId);

            const user = await UserService.updateUser(req.body,userId);

            res.status(200).json({ message: 'User Updated' });

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async deleteUser(req, res){
        try {

            const userId = req.userId;

            const deleteUser = await UserService.deleteUser(req.body, userId);

            res.status(200).json({ message: 'User Deleted' });

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }


   
    





}

module.exports = new UserController();