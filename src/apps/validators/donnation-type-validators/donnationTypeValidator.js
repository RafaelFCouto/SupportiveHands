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