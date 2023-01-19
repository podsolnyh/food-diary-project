const Joi = require('joi');
const { id } = require('./partials/common');
const { role } = require('./partials/role');

module.exports = {
    create: Joi.object({
        body: role,
        params: Joi.object({}),
    }),

    readList: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),

    readByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),

    updateByID: Joi.object({
        body: role,
        params: Joi.object({ id }),
    }),

    deleteByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),
};
