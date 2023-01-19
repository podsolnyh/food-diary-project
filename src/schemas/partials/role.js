const Joi = require('joi');

const role = Joi.object({
    name: Joi.string().max(255).required(),
});

module.exports = {
    role,
};
