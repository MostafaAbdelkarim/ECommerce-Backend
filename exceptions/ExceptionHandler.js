const logger = require('../config/Logger');
const {currentTimeStamp} = require('../config/TimeStamp');

const handleError = (err,req,res,next) => {
  const userIp = req.socket.remoteAddress || req.headers['x-forwarded-for'] || req.ip;
  logger.error(`${req.method} ${req.originalUrl} - IP: ${userIp} - AGENT: ${req.get('User-Agent')}`+` STATUS: ${err.status} - STATUSCODE: ${err.statusCode} - MESSAGE: ${err.message}`);
  res.status(err.statusCode || 500).send({ 
    timestamp: currentTimeStamp, 
    statusCode: err.statusCode || 500, 
    message: err.message || 'Internal Server Error', 
    status: err.status 
  });
};

module.exports = {handleError};