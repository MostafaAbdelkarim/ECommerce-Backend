const ApplicationExceptions = require('../ApplicationExceptions'); 
class Unautorized extends ApplicationExceptions {
    constructor(message = 'Unauthorized') {
      super(message, 401);
    }
  };
  
module.exports = Unautorized;