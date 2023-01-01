const ApplicationExceptions = require('../ApplicationExceptions'); 
class UserAlreadyRegistered extends ApplicationExceptions {
    constructor(message = 'User already registered') {
      super(message, 400);
    }
  };
  
module.exports = UserAlreadyRegistered;