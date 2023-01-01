const ApplicationExceptions = require('../ApplicationExceptions'); 
class ProductAlreadyExistsException extends ApplicationExceptions {
    constructor(message = 'Product Already Exists') {
      super(message, 400);
    }
  };
  
module.exports = ProductAlreadyExistsException;