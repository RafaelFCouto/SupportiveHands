const config = require('../configs/default.json');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const decryptedToken = async (authHeader) => {
    const[,token]=authHeader.split(' ');

    return promisify(jwt.verify)(token, config.HASH_BCRYPT);

}

module.exports = {decryptedToken}