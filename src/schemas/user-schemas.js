const Joi = require('joi');
const { id } = require('./partials/common');
const { credentials, profile } = require('./partials/user');

const credentialsObject = Joi.object({
    username: credentials.username.required(),
    email: credentials.email.required(),
    password: credentials.password.required(),
});

const profileObject = Joi.object({
    first_name: profile.firstName.required(),
    age: profile.age.required(),
    gender: profile.gender.required(),
    lifestyle: profile.lifestyle.required(),
    weight: profile.weight.required(),
    height: profile.height.required(),
    desired_weight: profile.desiredWeight.required(),
});

module.exports = {
    // Create user

    create: Joi.object({
        body: Joi.object({
            credentials: credentialsObject.required(),
            profile: profileObject.required(),
        }),
        params: Joi.object({}),
    }),

    // Me-notation requests

    readMe: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),

    readProfileMe: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),

    readCredentialsMe: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),

    updateProfileMe: Joi.object({
        body: profileObject.required(),
        params: Joi.object({}),
    }),

    updateCredentialsMe: Joi.object({
        body: credentialsObject.required(),
        params: Joi.object({}),
    }),

    deleteMe: Joi.object({
        body: Joi.object(),
        params: Joi.object(),
    }),

    // List operations

    readList: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),

    // ByID notation requests

    readByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),

    readProfileByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),

    readCredentialsByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),

    updateProfileByID: Joi.object({
        body: profileObject.required(),
        params: Joi.object({ id }),
    }),

    updateCredentialsByID: Joi.object({
        body: credentialsObject.required(),
        params: Joi.object({ id }),
    }),

    deleteByID: Joi.object({
        body: Joi.object(),
        params: Joi.object({ id }),
    }),

    // Role requests

    giveAdminRoleByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),

    revokeAdminRoleByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id }),
    }),
};
