const ApplicationExceptions = require('../ApplicationExceptions'); 
class NotEnoughFundsException extends ApplicationExceptions {
    constructor(message = 'Not enough funds') {
      super(message, 400);
    }
  };
  
module.exports = NotEnoughFundsException;