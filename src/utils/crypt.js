const config = require('../configs/default.json');
const crypto = require('crypto');
const iv = crypto.randomBytes(16);
const secretKey = config.SECRET_CRYPTO;
const algorithm = 'aes-256-cbc';

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text.toString()), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex'),
    }
}

const decrypt = (hash) => {
    const [newIv, text] = hash.split(':');
    const decipher = crypto.createDecipheriv
    (
        algorithm, secretKey, Buffer.from(newIv, 'hex'),
    );

    const decrypted = Buffer.concat
    (
        [decipher.update(Buffer.from(text, 'hex')), decipher.final()],
    );

    return decrypted.toString();
}

module.exports = {
    encrypt,
    decrypt

}