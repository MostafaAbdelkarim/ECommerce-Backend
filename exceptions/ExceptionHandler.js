const pino = require('../config/Logger');

const handleError = (err,req,res,next) => {
  pino.error(`${req.method} ${req.protocol}://${req.hostname}${req.originalUrl} - IP: ${req.ip} - HOST: ${req.get('Host')} - AGENT: ${req.get('User-Agent')}`)
  pino.error(`STATUS: ${err.status} - STATUSCODE: ${err.statusCode} - MESSAGE: ${err.message} \n`)
  res.status(err.statusCode || 500).send({ 
    timestamp: new Date(), 
    statusCode: err.statusCode || 500, 
    message: err.message || 'Internal Server Error', 
    status: err.status 
  });
};

module.exports = {handleError};