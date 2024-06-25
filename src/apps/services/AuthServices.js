const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const { encrypt } = require('../../utils/crypt');

class AuthService {

    async findUserByCredentials(email) {


  
        let whereClause = {};
        if (email) {
            whereClause = { email };
        } else {
            throw new Error('Email is required');
        }

        const user = await Users.findOne({ where: whereClause });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async verifyPassword(user, password) {
        const checkPassword = await user.checkPassword(password);
        if (!checkPassword) {
            throw new Error('Invalid password');
        }
        return checkPassword;
    }

    generateToken(user) {
        const { id } = user;
        const { iv, content } = encrypt(id);
        const newId = `${iv}:${content}`;
        const token = jwt.sign({ userId: newId }, process.env.HASH_BCRYPT, { expiresIn: process.env.EXPIRE_IN });
        return token;
    }
}

module.exports = new AuthService();