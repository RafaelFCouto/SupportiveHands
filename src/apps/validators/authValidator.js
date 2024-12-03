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
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .required()
        .messages({
          'string.pattern.base': 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.',
          'string.min': 'A senha deve ter pelo menos 8 caracteres.',
          'any.required': 'O campo senha é obrigatório.',
        }),
});

module.exports = authSchema;