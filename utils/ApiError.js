class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    (this.statuscode = statusCode), (this.message = message);

    Error.captureStackTrace(this, this.constructor);
  }
}


export default ApiError;