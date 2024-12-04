const Joi = require('joi');

const updateInstitutionSchema = Joi.object({
  name: Joi.string()
    .max(100)
    .required()
    .messages({
      'string.empty': 'O nome não pode estar vazio.',
      'string.max': 'O nome deve ter no máximo 100 caracteres.',
      'any.required': 'O campo nome é obrigatório.',
    }),
  email: Joi.string()
    .email()
    .required()
    .max(255)
    .messages({
      'string.max': 'O campo email deve ter no máximo 255 caracteres.',
      'string.email': 'O e-mail deve ser válido.',
      'any.required': 'O campo e-mail é obrigatório.',
    }),
  phonenumber: Joi.string()
    .pattern(/^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/)
    .required()
    .messages({
      'string.pattern.base': 'O telefone deve ser válido. Exemplo: (11) 98765-4321 ou 11987654321.',
      'any.required': 'O campo telefone é obrigatório.',
    }),
  beneficiaries: Joi.string()
    .max(100)
    .messages({
      'string.max': 'O campo beneficiários deve ter no máximo 255 caracteres.',
    }),
  cep: Joi.string()
    .pattern(/^\d{5}-\d{3}$/)
    .required()
    .messages({
      'string.pattern.base': 'O CEP deve ser válido. Exemplo: 12345-678.',
      'any.required': 'O campo CEP é obrigatório.',
    }),
  street: Joi.string()
    .required()
    .messages({
      'string.empty': 'O campo rua não pode estar vazio.',
      'any.required': 'O campo rua é obrigatório.',
    }),
  number: Joi.string()
    .required()
    .messages({
      'string.empty': 'O campo número não pode estar vazio.',
      'any.required': 'O campo número é obrigatório.',
    }),
  vacancies: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      'number.base': 'O campo vagas deve ser um número inteiro.',
      'number.min': 'O campo vagas deve ser maior ou igual a 0.',
      'any.required': 'O campo vagas é obrigatório.',
    }),
});

module.exports = updateInstitutionSchema;