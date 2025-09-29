  /**
   * @param {number} statusCode - HTTP status code (e.g., 400, 401, 404, 500)
   * @param {string} message - Error message
   * @param {boolean} isOperational - true if error is expected (default true)
   */

class ApiError extends Error{
    constructor(statusCode, message){
        super(message) 
        this.statuscode=statusCode,
        this.message=message

        Error.captureStackTrace(this,this.constructor);
    }
}

