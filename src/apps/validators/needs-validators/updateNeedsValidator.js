const Joi = require('joi');

const updateNeedsSchema = Joi.object({
  name: Joi.string()
  .min(1)
  .max(100)
  .required()
  .messages({
    'string.empty': 'O nome não pode estar vazio.',
    'string.max': 'O nome deve ter no máximo 100 caracteres.',
    'any.required': 'O campo nome é obrigatório.',
  }),
    quantity: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      'number.base': 'A quantidade deve ser um número.',
      'number.integer': 'O quantidade deve ser um número inteiro.',
      'number.min': 'O quantidade deve ser maior ou igual a 1.',
    })
});

module.exports = updateNeedsSchema;
