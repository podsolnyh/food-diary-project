const Joi = require('joi');
const { id } = require('./partials/common');
const { role } = require('./partials/role');

module.exports = {
    createRole: Joi.object({
        body: role,
        params: Joi.object({}),
    }),

    getListOfRoles: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),

    getRoleByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),

    editRoleByID: Joi.object({
        body: role,
        params: Joi.object({ id }),
    }),

    deleteRoleByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),
};
