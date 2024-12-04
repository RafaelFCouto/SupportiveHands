const Joi = require('joi');

const getUserSchema = Joi.object({
    id: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      'number.base': 'O ID deve ser um número.',
      'number.integer': 'O ID deve ser um número inteiro.',
      'number.min': 'O ID deve ser maior ou igual a 1.',
      'any.required': 'O campo ID é obrigatório para listar um usuário.',
    })
});

module.exports = getUserSchema;