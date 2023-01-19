const Joi = require('joi');

const id = Joi.number().integer().required();

module.exports = {
    id,
};
