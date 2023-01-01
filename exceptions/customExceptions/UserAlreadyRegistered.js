const ApplicationExceptions = require('../ApplicationExceptions'); 
class UserAlreadyRegistered extends ApplicationExceptions {
    constructor(message) {
      super(message, 400);
    }
  };
  
module.exports = UserAlreadyRegistered;