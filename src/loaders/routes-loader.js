const passport = require('passport');
const exceptionsHandler = require('../middlewares/exceptions-handler');
const loggerMiddleware = require('../middlewares/logger');

const setupRoutes = (server) => {
    // Logging
    server.use(loggerMiddleware);

    // Doesn't need authentication
    server.get('/ping', (req, res) => {
        res.send('pong');
        res.statusCode(200);
    });
    server.use('/auth', require('../routes/auth-routes'));
    server.use('/documentation', require('../routes/documentation'));

    // Do need authentication
    server.use(passport.authenticate('jwt', { session: false }));
    server.use('/users', require('../routes/user-routes'));

    // Exceptions handling
    server.use(exceptionsHandler);
};

module.exports = setupRoutes;
