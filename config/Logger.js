const {currentTimeStamp} = require('../config/TimeStamp');

const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'debug',
  transport: {
    target: 'pino-pretty', 
    options: {
      colorize: true,
      translateTime: `${currentTimeStamp}`, //'SYS:standard'
      ignore: 'hostname,pid',
      // timestamp: `${currentTimeStamp}`, // false/true
    }
  },
});

module.exports = logger;