const Joi = require('joi');

const username = Joi.string().max(50);
const email = Joi.string().max(255);
const password = Joi.string().min(6).max(255);

const firstName = Joi.string().max(50);
const age = Joi.number().integer().min(5).max(120);
const gender = Joi.string().valid('male', 'female');
const lifestyle = Joi.string().valid(
    'passive',
    'moderate',
    'average',
    'high',
    'athlete',
);
const weight = Joi.number().precision(2);
const height = Joi.number().precision(2);
const desiredWeight = Joi.number().precision(2);

module.exports = {
    credentials: {
        username,
        email,
        password,
    },
    profile: {
        firstName,
        age,
        gender,
        lifestyle,
        weight,
        height,
        desiredWeight,
    },
};
