const joi = require('joi');

const schemavalidate = joi.object({
    name: joi.string().min(3).max(30),
    empEmail: joi.string().email(),
    password: joi.string().min(6),
    empId: joi.string().pattern(/^[0-9]{6}$/),
    sector: joi.array().items(joi.string().valid('IT', 'HR', 'Finance', 'Marketing')),
    address: joi.string().object({
        city: joi.string(),
        state: joi.string(),
        country: joi.string()
    })

});

module.exports = schemavalidate;