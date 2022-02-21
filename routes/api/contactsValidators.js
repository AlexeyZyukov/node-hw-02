const Joi = require('joi')

const schemaCreateContact = Joi.object({
    name: Joi.string()
        .min(3)
        .required()
        .messages({
            'any.required': 'Имя не может быть короче 3-х символов',
            'string.empty': 'Поле name должно быть заполнено',
        }),
    email: Joi.string()
        .pattern(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
        .required()
        .messages({
            'any.required': 'Поле e-mail должно содержать латинские символы и знак @',
            'string.empty': 'Поле e-mail должно быть заполнено',
        }),
    phone: Joi.string()
        .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
        .required()
        .messages({
            'any.required': '',
            'string.empty': 'Поле phone должно быть заполнено',
        })
})

const schemaPutContact = Joi.object({
    name: Joi.string()
        .min(3)
        .messages({
            'any.required': 'Имя не может быть короче 3-х символов',
            'string.empty': 'Поле name должно быть заполнено',
        }),
    email: Joi.string()
        .pattern(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
        .messages({
            'any.required': 'Поле e-mail должно содержать латинские символы и знак @',
            'string.empty': 'Поле e-mail должно быть заполнено',
        }),
    phone: Joi.string()
        .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
        .messages({
            'any.required': '',
            'string.empty': 'Поле phone должно быть заполнено',
        })
})

module.exports = { schemaCreateContact, schemaPutContact }

//e-mail pattern: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
//phone pattern: https://www.javascript-coder.com/form-validation/javascript-form-validation-phone-number/