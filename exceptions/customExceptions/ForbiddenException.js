const ApplicationExceptions = require('../ApplicationExceptions'); 
class Forbidden extends ApplicationExceptions {
    constructor(message = 'Forbidden') {
      super(message, 403);
    }
  };
  
module.exports = Forbidden;