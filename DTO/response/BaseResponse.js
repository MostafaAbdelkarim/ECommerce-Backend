const logger = require('../../config/Logger');
const {currentTimeStamp} = require('../../config/TimeStamp');

function BaseResponse (req, res, body, statusCode=200, status="Success") {
    const userIp = req.socket.remoteAddress || req.headers['x-forwarded-for'] || req.ip;
    logger.info(`${req.method} ${req.originalUrl} - IP: ${userIp} - AGENT: ${req.get('User-Agent')} - STATUS: ${status} - STATUSCODE: ${statusCode}`);
    return res.status(statusCode).send(
        {
            timeStamp: currentTimeStamp, 
            status: status, 
            body: body
        });
};
  
module.exports = BaseResponse;