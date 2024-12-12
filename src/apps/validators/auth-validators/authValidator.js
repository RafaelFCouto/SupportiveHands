const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'O login deve ser um e-mail válido.',
      'any.required': 'O campo login é obrigatório.',
    }),
    password: Joi.string()
    .required()
});

module.exports = authSchema;