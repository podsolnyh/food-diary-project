const { createLog } = require('../classes/logger');

const loggingMiddleware = async (req, res, next) => {
    await next();
    await createLog(req);
};

module.exports = loggingMiddleware;
