const jwt = require('jsonwebtoken');
const AuthService = require('../services/AuthServices');

class AuthController {
    async authenticate(req, res) {

        try {

    
            const reqEmail = req.body.email;
            const password = req.body.password;


            const user = await AuthService.findUserByCredentials(reqEmail);
            await AuthService.verifyPassword(user, password);
            const token =  await AuthService.generateToken(user);

            const { id, email: email } = user; 
            return res.status(200).json({ user: { id,  email: email }, token: token });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();