const ApplicationExceptions = require('../ApplicationExceptions'); 
class NotFoundError extends ApplicationExceptions {
    constructor(message = 'Not Found') {
      super(message, 404);
    }
  };
  
module.exports = NotFoundError;