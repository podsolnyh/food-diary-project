const Joi = require('joi');
const { profile, credentials } = require('./partials/user');

module.exports = {
    register: Joi.object({
        body: Joi.object({
            username: credentials.username.required(),
            email: credentials.email.required(),
            password: credentials.password.required(),
            profile: Joi.object({
                first_name: profile.firstName.required(),
                age: profile.age.required(),
                gender: profile.gender.required(),
                lifestyle: profile.lifestyle.required(),
                weight: profile.weight.required(),
                height: profile.height.required(),
                desired_weight: profile.desiredWeight.required(),
            }),
        }),
        params: Joi.object({}),
    }),

    login: Joi.object({
        body: Joi.object({
            username: credentials.username,
            email: credentials.email,
            password: credentials.password.required(),
        }).xor('username', 'email'),
        params: Joi.object({}),
    }),

    logout: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),
};
