const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const setupPassportStrategies = require('./passport-strategies-loader');

const initExpressModules = (server) => {
    require('express-async-errors');

    const passport = require('passport');
    setupPassportStrategies(passport);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser('secret'));

    server.use(passport.initialize());
};

module.exports = initExpressModules;
