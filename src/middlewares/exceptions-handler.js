const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const statusCodeMessages = require('../constants/status-code-messages');
const ResponseFormat = require('../helpers/response-format');
const createError = require('../classes/logger').createError;

const exceptionsHandler = async (err, req, res) => {
    await createError(res, err);
  
    if (Object.values(ReasonPhrases).includes(err.name)) {
       
        const message =
            err.message ||
            statusCodeMessages[err.status] ||
            ReasonPhrases[StatusCodes[err.status]];
        res.status(err.status).json(
            ResponseFormat.error(err.status, message, {
                name: err.name,
            }),
        );
    
    } else {
        res.status(500).json(
            ResponseFormat.error(500, 'Unexpected error', {
                name: err.name,
                stack: err.stack,
            }),
        );
    }
};

module.exports = exceptionsHandler;
