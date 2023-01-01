const pino = require('../config/Logger');
const {currentTimeStamp} = require('../config/TimeStamp');

const handleError = (err,req,res,next) => {
  pino.error(`${currentTimeStamp} ${req.method} ${req.protocol}://${req.hostname}${req.originalUrl} - IP: ${req.ips} - AGENT: ${req.get('User-Agent')}`)
  pino.error(`STATUS: ${err.status} - STATUSCODE: ${err.statusCode} - MESSAGE: ${err.message}`)
  res.status(err.statusCode || 500).send({ 
    timestamp: currentTimeStamp, 
    statusCode: err.statusCode || 500, 
    message: err.message || 'Internal Server Error', 
    status: err.status 
  });
};

module.exports = {handleError};