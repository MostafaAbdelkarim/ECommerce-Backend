const pino = require('../../config/Logger');
const {currentTimeStamp} = require('../../config/TimeStamp');

function BaseResponse (req, res, body, statusCode=200, status="Success") {

    pino.info(`${currentTimeStamp} ${req.method} ${req.protocol}://${req.hostname}${req.originalUrl} - IP: ${req.ips} - AGENT: ${req.get('User-Agent')}`);
    return res.status(statusCode).send(
        {
            timeStamp: currentTimeStamp, 
            status: status, 
            body: body
        });
};
  
module.exports = BaseResponse;