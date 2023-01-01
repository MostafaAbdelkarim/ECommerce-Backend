const {getCurrentTimeStamp} = require('../config/TimeStamp');

const pino = require('pino');

const currentTimeStamp = getCurrentTimeStamp();
const logger = pino({
  level: process.env.LOG_LEVEL || 'debug',
  transport: {
    target: 'pino-pretty', 
    options: {
      colorize: true,
      translateTime: 'SYS:standard', //`${currentTimeStamp}`,
      ignore: 'hostname,pid',
      // timestamp: `${currentTimeStamp}`, // false/true
    }
  },
});

module.exports = logger;