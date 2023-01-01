class ApplicationExceptions extends Error {
  constructor(message, statusCode, req) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.status = 'Failed';
    this.req = req;
  }
}

module.exports = ApplicationExceptions;