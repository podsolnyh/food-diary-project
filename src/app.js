// Load environment variables from .env if file exists
// Then check all environment variables
require('dotenv').config();
require('./env');

const express = require('express');
const server = express();
const { createInfo, createError } = require('./classes/logger');

const init = require('./loaders');
const dbConnect = require('./classes/logger').connect;

(async () => {
    try {
        await dbConnect();
        createInfo({
            message: 'Logging database connected successfully',
        });

        await init(server);
    } catch (err) {
        console.log('Server is dead.');
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);

        try {
            createError({}, err);
        } catch (ignoredError) {
            console.log('Logging is also dead:');
            console.log(ignoredError);
        }
    }
})();

module.exports = server;
