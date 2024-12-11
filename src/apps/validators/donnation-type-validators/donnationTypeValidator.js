const Joi = require('joi');

class DonnationTypeSchemas {

    createDonnationTypeSchema = () => {
        return Joi.object({
            name: Joi.string()
                .min(1)
                .max(55)
                .required()
                .messages({
                    'string.empty': 'O nome não pode estar vazio.',
                    'string.max': 'O nome deve ter no máximo 55 caracteres.',
                    'any.required': 'O campo nome é obrigatório.',
                }),
        });
    }

    getDonnationTypeSchema = () => {
        return Joi.object({
            id: Joi.number()
                .integer()
                .min(1)
                .required()
                .messages({
                    'number.base': 'O ID deve ser um número.',
                    'number.integer': 'O ID deve ser um número inteiro.',
                    'number.min': 'O ID deve ser maior ou igual a 1.',
                    'any.required': 'O campo ID é obrigatório.',
                }),
        });
    }

    updateDonnationTypeSchema = () => {
        return Joi.object({
            name: Joi.string()
                .min(1)
                .max(55)
                .required()
                .messages({
                    'string.empty': 'O nome não pode estar vazio.',
                    'string.max': 'O nome deve ter no máximo 55 caracteres.',
                    'any.required': 'O campo nome é obrigatório.',
                }),
        });
    }
}

module.exports = new DonnationTypeSchemas();