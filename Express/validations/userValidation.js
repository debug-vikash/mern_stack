const joi = require('joi');

const schemavalidate = joi.object({
    name: joi.string().min(3).max(30),
    email: joi.string().email(),
    password: joi.string().min(6),
    mobile: joi.string().pattern(/^[0-9]{10}$/)
});

module.exports = schemavalidate;