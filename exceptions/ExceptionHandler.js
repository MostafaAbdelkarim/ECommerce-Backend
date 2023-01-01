const logger = require('../config/Logger');
const {getCurrentTimeStamp} = require('../config/TimeStamp');

const handleError = (err,req,res,next) => {
  const userIp = req.socket.remoteAddress || req.headers['X-Forwarded-For'] || req.ip;
  logger.error(`${req.method} ${req.originalUrl} - IP: ${userIp} - AGENT: ${req.get('User-Agent')} - STATUS: ${err.status} - STATUSCODE: ${err.statusCode} - MESSAGE: ${err.message}`);
  res.status(err.statusCode || 500).send({ 
    timestamp: getCurrentTimeStamp(), 
    statusCode: err.statusCode || 500, 
    message: err.message || 'Internal Server Error', 
    status: err.status 
  });
};

module.exports = {handleError};