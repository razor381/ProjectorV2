import HttpStatus from 'http-status-codes';

/**
 * Build error object with format { code, message, details(?) },
 * according to error type [isBoom, isJoi, else Server error].
 *
 * @param {Error} err
 * @returns {Object}
 */
export default function buildError(err) {
  // Validation errors
  if (err.isJoi) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details:
        err.details &&
        err.details.map((err) => ({
          message: err.message,
          param: err.path.join('.'),
        }))
    }

  }

  // HTTP errors
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error,
    };
  }

  // Consider all other errors as INTERNAL_SERVER_ERROR
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
  };
}
