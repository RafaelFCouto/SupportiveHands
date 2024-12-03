const Joi = require('joi');
const joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .message({
            'string.email': 'E-mail is not valid',
            'any.required': 'E-mail is required'
        }),
});

module.exports = authSchema;