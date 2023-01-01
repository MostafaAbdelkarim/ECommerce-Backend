const pino = require('../../config/Logger');

function BaseResponse (req, res, body, statusCode=200, status="Success") {
    pino.info(`${req.method} ${req.protocol}://${req.hostname}${req.originalUrl} - IP: ${req.ip} - HOST: ${req.get('Host')} - AGENT: ${req.get('User-Agent')}`)
    pino.info(`STATUS: ${status} \n`)
    return res.status(statusCode).send(
        {
            timeStamp: new Date(), 
            status: status, 
            body: body
        });
};
  
module.exports = BaseResponse;