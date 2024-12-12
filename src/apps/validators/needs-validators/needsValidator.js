const Joi = require('joi');

class NeedsSchemas {

    createNeedsSchema = () => {
        return Joi.object({
            name: Joi.string()
                .min(1)
                .max(100)
                .required()
                .messages({
                    'string.empty': 'O nome não pode estar vazio.',
                    'string.max': 'O nome deve ter no máximo 100 caracteres.',
                    'any.required': 'O campo nome é obrigatório.',
                }),
            donation_type_id: Joi.number()
                .integer()
                .min(1)
                .required()
                .messages({
                    'number.base': 'O donation_type_id deve ser um número.',
                    'number.integer': 'O donation_type_id deve ser um número inteiro.',
                    'number.min': 'O donation_type_id deve ser maior ou igual a 1.',
                }),
            institution_id: Joi.number()
                .integer()
                .min(1)
                .required()
                .messages({
                    'number.base': 'O institution_id deve ser um número.',
                    'number.integer': 'O institution_id deve ser um número inteiro.',
                    'number.min': 'O institution_id deve ser maior ou igual a 1.',
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
    }

    updateNeedsSchema = () => {
        return Joi.object({
            name: Joi.string()
                .min(1)
                .max(100)
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
    }
}

module.exports = new NeedsSchemas();