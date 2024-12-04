const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'string.empty': 'O nome não pode estar vazio.',
      'string.max': 'O nome deve ter no máximo 100 caracteres.',
      'any.required': 'O campo nome é obrigatório.',
    }),
  email: Joi.string()
    .email()
    .max(255)
    .required()
    .messages({
      'string.email': 'O e-mail deve ser válido.',
      'string.max': 'O e-mail deve ter no máximo 255 caracteres.',
      'any.required': 'O campo e-mail é obrigatório.',
    }),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
    .required()
    .messages({
      'string.pattern.base': 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.',
      'string.min': 'A senha deve ter pelo menos 8 caracteres.',
      'string.max': 'A senha deve ter no máximo 128 caracteres.',
      'any.required': 'O campo senha é obrigatório.',
    }),
});

module.exports = createUserSchema;
